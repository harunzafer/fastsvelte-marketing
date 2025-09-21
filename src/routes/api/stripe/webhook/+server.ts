import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Stripe } from 'stripe';
import { constructWebhookEvent, extractCheckoutSessionData } from '$lib/server/stripe';
import { grantRepositoryAccess } from '$lib/server/github';
import { sendPurchaseConfirmation } from '$lib/server/email';



export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.text();
		const signature = request.headers.get('stripe-signature');

		if (!signature) {
			return json({ error: 'Missing Stripe signature' }, { status: 400 });
		}

		let event: Stripe.Event;

		try {
			event = await constructWebhookEvent(body, signature);
		} catch (err) {
			console.error('Webhook signature verification failed:', err);
			return json({ error: 'Invalid signature' }, { status: 400 });
		}

		// Handle the event
		switch (event.type) {
			case 'checkout.session.completed': {
				const session = event.data.object as Stripe.Checkout.Session;

				// Extract customer information using service
				const sessionData = extractCheckoutSessionData(session);

				if (!sessionData) {
					console.error('Missing required data in checkout session');
					break;
				}

				console.log('Processing successful purchase:', sessionData);

				// Grant GitHub repository access
				const githubAccessGranted = await grantRepositoryAccess(
					sessionData.githubUsername,
					sessionData.customerEmail
				);

				// Send confirmation email
				try {
					await sendPurchaseConfirmation({
						customerEmail: sessionData.customerEmail,
						customerName: sessionData.customerName,
						plan: sessionData.plan,
						githubUsername: sessionData.githubUsername
					});
					console.log(`Confirmation email sent successfully to ${sessionData.customerEmail}`);
				} catch (error) {
					console.error('Failed to send confirmation email:', error);
					// Don't throw - we don't want email failures to break the webhook
				}

				// TODO: Store purchase record in database for tracking
				console.log('Purchase processed successfully:', {
					...sessionData,
					githubAccessGranted
				});

				break;
			}

			case 'payment_intent.payment_failed': {
				const paymentIntent = event.data.object as Stripe.PaymentIntent;
				console.log('Payment failed:', paymentIntent.id);
				break;
			}

			default:
				console.log(`Unhandled event type: ${event.type}`);
		}

		return json({ received: true });
	} catch (error) {
		console.error('Webhook processing error:', error);
		return json({ error: 'Webhook processing failed' }, { status: 500 });
	}
};
