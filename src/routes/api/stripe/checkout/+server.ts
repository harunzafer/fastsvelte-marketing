import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Stripe from 'stripe';
import { env } from '$env/dynamic/private';

// Use dynamic env imports with fallbacks for deployment
const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY || 'sk_test_placeholder';
const STRIPE_SOLO_PRICE_ID = env.STRIPE_SOLO_PRICE_ID || 'price_placeholder';
const STRIPE_DEVELOPER_PRICE_ID = env.STRIPE_DEVELOPER_PRICE_ID || 'price_placeholder';
const STRIPE_TEAM_PRICE_ID = env.STRIPE_TEAM_PRICE_ID || 'price_placeholder';
const PUBLIC_APP_URL = env.PUBLIC_APP_URL || 'https://fastsvelte.dev';

const stripe = new Stripe(STRIPE_SECRET_KEY, {
	apiVersion: '2025-08-27.basil'
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
