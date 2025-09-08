import { loadStripe } from '@stripe/stripe-js';
import { env } from '$env/dynamic/public';

// Temporary workaround for Vercel build issue - use dynamic import
export const stripe = loadStripe(env.PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

export async function createCheckoutSession(plan: 'solo' | 'developer' | 'team') {
	try {
		const response = await fetch('/api/stripe/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ plan })
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.error || 'Failed to create checkout session');
		}

		return data.sessionId;
	} catch (error) {
		console.error('Error creating checkout session:', error);
		throw error;
	}
}

export async function redirectToCheckout(plan: 'solo' | 'developer' | 'team') {
	try {
		const sessionId = await createCheckoutSession(plan);
		const stripeInstance = await stripe;

		if (!stripeInstance) {
			throw new Error('Failed to load Stripe');
		}

		const { error } = await stripeInstance.redirectToCheckout({
			sessionId
		});

		if (error) {
			throw error;
		}
	} catch (error) {
		console.error('Checkout redirect error:', error);
		throw error;
	}
}
