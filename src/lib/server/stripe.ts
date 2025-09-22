import Stripe from 'stripe';
import { stripe as stripeConfig } from './config';
import { APP_URL } from '$lib/config';

export const stripe = new Stripe(stripeConfig.secretKey, {
	apiVersion: '2025-08-27.basil'
});

export type PlanType = 'solo' | 'developer' | 'team';

export interface CheckoutSessionData {
	plan: PlanType;
	successUrl?: string;
	cancelUrl?: string;
}

export async function createCheckoutSession(
	data: CheckoutSessionData
): Promise<Stripe.Checkout.Session> {
	const { plan, successUrl, cancelUrl } = data;

	let priceId: string;
	switch (plan) {
		case 'solo':
			priceId = stripeConfig.priceIds.solo;
			break;
		case 'developer':
			priceId = stripeConfig.priceIds.developer;
			break;
		case 'team':
			priceId = stripeConfig.priceIds.team;
			break;
		default:
			throw new Error(`Invalid plan: ${plan}`);
	}

	return await stripe.checkout.sessions.create({
		mode: 'payment',
		payment_method_types: ['card'],
		line_items: [
			{
				price: priceId,
				quantity: 1
			}
		],
		success_url: successUrl || `${APP_URL}/purchase/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: cancelUrl || `${APP_URL}/purchase/cancelled`,
		customer_creation: 'always',
		billing_address_collection: 'required',
		allow_promotion_codes: true, // Enable coupon input
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
}

export async function constructWebhookEvent(
	body: string,
	signature: string
): Promise<Stripe.Event> {
	return stripe.webhooks.constructEvent(body, signature, stripeConfig.webhookSecret);
}

export async function retrieveSession(sessionId: string): Promise<Stripe.Checkout.Session> {
	return await stripe.checkout.sessions.retrieve(sessionId);
}

export async function retrieveCustomer(customerId: string): Promise<Stripe.Customer> {
	return (await stripe.customers.retrieve(customerId)) as Stripe.Customer;
}

export interface CheckoutSessionCompleted {
	sessionId: string;
	customerEmail: string;
	customerName?: string;
	plan: string;
	githubUsername: string;
}

export function extractCheckoutSessionData(
	session: Stripe.Checkout.Session
): CheckoutSessionCompleted | null {
	const customerEmail = session.customer_details?.email;
	const customerName = session.customer_details?.name;
	const plan = session.metadata?.plan;
	const githubUsername = session.custom_fields?.find((field) => field.key === 'github_username')
		?.text?.value;

	if (!customerEmail || !plan || !githubUsername) {
		return null;
	}

	return {
		sessionId: session.id,
		customerEmail,
		customerName: customerName || undefined,
		plan,
		githubUsername
	};
}
