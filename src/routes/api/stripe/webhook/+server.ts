import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Stripe from 'stripe';
import { env } from '$env/dynamic/private';

// Use dynamic env imports with fallbacks for deployment
const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY || 'sk_test_placeholder';
const STRIPE_WEBHOOK_SECRET = env.STRIPE_WEBHOOK_SECRET || 'whsec_placeholder';
const GITHUB_TOKEN = env.GITHUB_TOKEN || 'ghp_placeholder';
const GITHUB_REPO_OWNER = env.GITHUB_REPO_OWNER || 'harunzafer';
const GITHUB_REPO_NAME = env.GITHUB_REPO_NAME || 'fastsvelte';

const stripe = new Stripe(STRIPE_SECRET_KEY, {
	apiVersion: '2025-08-27.basil'
});

async function grantGitHubAccess(githubUsername: string, customerEmail: string) {
	try {
		// Add collaborator to the private repository
		const response = await fetch(
			`https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/collaborators/${githubUsername}`,
			{
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${GITHUB_TOKEN}`,
					Accept: 'application/vnd.github.v3+json',
					'X-GitHub-Api-Version': '2022-11-28'
				},
				body: JSON.stringify({
					permission: 'pull' // Read access only
				})
			}
		);

		if (!response.ok) {
			const errorData = await response.text();
			throw new Error(`GitHub API error: ${response.status} - ${errorData}`);
		}

		console.log(`Successfully granted GitHub access to ${githubUsername} (${customerEmail})`);
		return true;
	} catch (error) {
		console.error('Failed to grant GitHub access:', error);
		// You might want to store this in a database for manual processing
		return false;
	}
}

async function sendConfirmationEmail(customerEmail: string, plan: string, githubUsername: string) {
	// TODO: Implement email service integration (SendGrid, Mailgun, etc.)
	// For now, just log the details
	console.log('Confirmation email should be sent to:', {
		email: customerEmail,
		plan,
		githubUsername,
		repoUrl: `https://github.com/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}`
	});
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.text();
		const signature = request.headers.get('stripe-signature');

		if (!signature) {
			return json({ error: 'Missing Stripe signature' }, { status: 400 });
		}

		let event: Stripe.Event;

		try {
			event = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET);
		} catch (err) {
			console.error('Webhook signature verification failed:', err);
			return json({ error: 'Invalid signature' }, { status: 400 });
		}

		// Handle the event
		switch (event.type) {
			case 'checkout.session.completed': {
				const session = event.data.object as Stripe.Checkout.Session;

				// Extract customer information
				const customerEmail = session.customer_details?.email;
				const plan = session.metadata?.plan;
				const githubUsername = session.custom_fields?.find(
					(field) => field.key === 'github_username'
				)?.text?.value;

				if (!customerEmail || !plan || !githubUsername) {
					console.error('Missing required data in checkout session:', {
						customerEmail,
						plan,
						githubUsername
					});
					break;
				}

				console.log('Processing successful purchase:', {
					sessionId: session.id,
					customerEmail,
					plan,
					githubUsername
				});

				// Grant GitHub repository access
				const githubAccessGranted = await grantGitHubAccess(githubUsername, customerEmail);

				// Send confirmation email
				await sendConfirmationEmail(customerEmail, plan, githubUsername);

				// TODO: Store purchase record in database for tracking
				console.log('Purchase processed successfully:', {
					sessionId: session.id,
					customerEmail,
					plan,
					githubUsername,
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
