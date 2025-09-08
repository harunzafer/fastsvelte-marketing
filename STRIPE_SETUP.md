# Stripe Integration Setup Guide

This guide walks you through setting up Stripe payments for FastSvelte purchases with automatic GitHub repository access.

## Prerequisites

1. A Stripe account (create one at [stripe.com](https://stripe.com))
2. A GitHub personal access token with repository permissions
3. Node.js and npm installed

## Step 1: Stripe Dashboard Setup

### Create Products

1. Log into your Stripe Dashboard
2. Go to **Products** → **Add Product**

**Professional Plan:**

- Name: FastSvelte Professional
- Description: Complete SaaS starter kit for developers
- Pricing: $199 one-time payment
- Copy the Price ID (starts with `price_`)

**Enterprise Plan:**

- Name: FastSvelte Enterprise
- Description: For teams and businesses seeking guidance
- Pricing: $399 one-time payment
- Copy the Price ID (starts with `price_`)

### Get API Keys

1. Go to **Developers** → **API Keys**
2. Copy your **Publishable key** (starts with `pk_`)
3. Copy your **Secret key** (starts with `sk_`)

### Create Webhook Endpoint

1. Go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. Endpoint URL: `https://your-domain.com/api/stripe/webhook`
4. Listen to events: `checkout.session.completed` and `payment_intent.payment_failed`
5. Copy the **Signing secret** (starts with `whsec_`)

## Step 2: GitHub Setup

### Create Personal Access Token

1. Go to GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Generate new token with these permissions:
   - `repo` (Full control of private repositories)
   - `admin:org` (if the repository is owned by an organization)
3. Copy the token (starts with `ghp_` or `github_pat_`)

### Repository Permissions

Make sure the repository `harunzafer/fastsvelte` is:

- Private (for paid access)
- Accessible with your GitHub token
- Ready to grant collaborator access

## Step 3: Environment Variables

Create a `.env` file in the project root:

```bash
# Stripe Configuration
PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Product IDs from Stripe Dashboard
STRIPE_PROFESSIONAL_PRICE_ID=price_your_professional_price_id
STRIPE_ENTERPRISE_PRICE_ID=price_your_enterprise_price_id

# App Configuration
PUBLIC_APP_URL=https://your-domain.com
GITHUB_TOKEN=ghp_your_github_token_here
GITHUB_REPO_OWNER=harunzafer
GITHUB_REPO_NAME=fastsvelte
```

## Step 4: Testing

### Test Mode

1. Use test API keys (they start with `pk_test_` and `sk_test_`)
2. Use test card numbers from [Stripe Testing Guide](https://stripe.com/docs/testing):
   - Success: `4242424242424242`
   - Decline: `4000000000000002`

### Test Purchase Flow

1. Go to your pricing section
2. Click "Purchase FastSvelte" or "Purchase Enterprise"
3. Fill in test card details and a GitHub username
4. Complete the checkout
5. Verify:
   - Webhook receives the event
   - GitHub access is granted
   - User is redirected to success page

## Step 5: Production Deployment

### Switch to Live Mode

1. In Stripe Dashboard, toggle from **Test mode** to **Live mode**
2. Create new products with live pricing
3. Get live API keys (start with `pk_live_` and `sk_live_`)
4. Update webhook endpoint to production URL
5. Update environment variables with live keys

### Security Checklist

- [ ] Environment variables are secure and not exposed
- [ ] Webhook signature verification is enabled
- [ ] HTTPS is enforced in production
- [ ] GitHub token has minimal required permissions
- [ ] Error handling and logging are implemented
- [ ] Database storage for purchase records (recommended)

## Step 6: Email Integration (Optional)

To send confirmation emails, integrate with an email service:

1. **SendGrid**: Add API key to environment variables
2. **Mailgun**: Configure domain and API key
3. **AWS SES**: Set up IAM credentials

Update the webhook handler in `src/routes/api/stripe/webhook/+server.ts` to implement `sendConfirmationEmail()`.

## Troubleshooting

### Common Issues

1. **Webhook not receiving events**: Check endpoint URL and ensure it's publicly accessible
2. **GitHub access not granted**: Verify token permissions and repository settings
3. **Environment variables not loaded**: Ensure `.env` file is in project root
4. **CORS issues**: Check API endpoint configurations

### Debug Logs

The webhook handler logs important information. Check your deployment logs for:

- Successful purchases
- GitHub API responses
- Email sending status
- Error details

### Support

For issues specific to this integration, check:

1. Stripe webhook logs in Dashboard
2. GitHub API rate limits
3. Application deployment logs

---

## Architecture Overview

```
[Customer] → [Stripe Checkout] → [Webhook] → [GitHub API]
                                         ↓
                              [Email Service] → [Customer]
```

The flow:

1. Customer clicks purchase button
2. Redirected to Stripe Checkout
3. After payment, Stripe sends webhook event
4. Webhook handler grants GitHub access
5. Confirmation email sent to customer
6. Customer receives repository access

This ensures a fully automated purchase-to-access flow.
