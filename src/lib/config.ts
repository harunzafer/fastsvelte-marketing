// Client-side configuration
// Environment-specific configuration that may differ between local, staging, and production.

import { PUBLIC_STRIPE_PUBLISHABLE_KEY, PUBLIC_APP_URL } from '$env/static/public';

export const STRIPE_PUBLISHABLE_KEY = PUBLIC_STRIPE_PUBLISHABLE_KEY;
export const APP_URL = PUBLIC_APP_URL;
