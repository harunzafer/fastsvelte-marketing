// Server-side configuration
// Environment-specific configuration that may differ between local, staging, and production.

import {
	STRIPE_SECRET_KEY,
	STRIPE_WEBHOOK_SECRET,
	STRIPE_SOLO_PRICE_ID,
	STRIPE_DEVELOPER_PRICE_ID,
	STRIPE_TEAM_PRICE_ID,
	GITHUB_TOKEN,
	GITHUB_REPO_OWNER,
	GITHUB_REPO_NAME,
	SENDGRID_API_KEY,
	SENDGRID_FROM_EMAIL
} from '$env/static/private';

// Stripe configuration
export const stripe = {
	secretKey: STRIPE_SECRET_KEY,
	webhookSecret: STRIPE_WEBHOOK_SECRET,
	priceIds: {
		solo: STRIPE_SOLO_PRICE_ID,
		developer: STRIPE_DEVELOPER_PRICE_ID,
		team: STRIPE_TEAM_PRICE_ID
	}
} as const;

// GitHub configuration
export const github = {
	token: GITHUB_TOKEN,
	repoOwner: GITHUB_REPO_OWNER,
	repoName: GITHUB_REPO_NAME
} as const;

// SendGrid configuration
export const sendgrid = {
	apiKey: SENDGRID_API_KEY,
	fromEmail: SENDGRID_FROM_EMAIL
} as const;

