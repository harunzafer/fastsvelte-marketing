import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { createCheckoutSession, type PlanType } from '$lib/server/stripe';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { plan } = await request.json();

		// Validate plan
		if (!['solo', 'developer', 'team'].includes(plan)) {
			return json({ error: 'Invalid plan selected' }, { status: 400 });
		}

		// Create Stripe checkout session using service
		const session = await createCheckoutSession({
			plan: plan as PlanType
		});

		return json({ sessionId: session.id });
	} catch (error) {
		console.error('Stripe checkout error:', error);
		return json({ error: 'Failed to create checkout session' }, { status: 500 });
	}
};
