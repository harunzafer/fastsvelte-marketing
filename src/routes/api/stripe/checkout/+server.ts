import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Stripe from 'stripe';
import {
	STRIPE_SECRET_KEY,
	STRIPE_SOLO_PRICE_ID,
	STRIPE_DEVELOPER_PRICE_ID,
	STRIPE_TEAM_PRICE_ID,
	PUBLIC_APP_URL
} from '$env/static/private';

const stripe = new Stripe(STRIPE_SECRET_KEY, {
	apiVersion: '2024-12-18.acacia'
});

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { plan } = await request.json();

		// Validate plan and get corresponding price ID
		let priceId: string;
		let planName: string;

		switch (plan) {
			case 'solo':
				priceId = STRIPE_SOLO_PRICE_ID;
				planName = 'FastSvelte Solo';
				break;
			case 'developer':
				priceId = STRIPE_DEVELOPER_PRICE_ID;
				planName = 'FastSvelte Developer';
				break;
			case 'team':
				priceId = STRIPE_TEAM_PRICE_ID;
				planName = 'FastSvelte Team';
				break;
			default:
				return json({ error: 'Invalid plan selected' }, { status: 400 });
		}

		// Create Stripe checkout session
		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			payment_method_types: ['card'],
			line_items: [
				{
					price: priceId,
					quantity: 1
				}
			],
			success_url: `${PUBLIC_APP_URL}/purchase/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${PUBLIC_APP_URL}/purchase/cancelled`,
			customer_creation: 'always',
			billing_address_collection: 'required',
			metadata: {
				plan: plan,
				product: 'fastsvelte'
			},
			custom_fields: [
				{
					key: 'github_username',
					label: {
						type: 'custom',
						custom: 'GitHub Username'
					},
					type: 'text',
					optional: false
				}
			]
		});

		return json({ sessionId: session.id });
	} catch (error) {
		console.error('Stripe checkout error:', error);
		return json({ error: 'Failed to create checkout session' }, { status: 500 });
	}
};
