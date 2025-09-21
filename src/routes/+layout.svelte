<script lang="ts">
	import '../app.css';
	import ConfigProvider from '$lib/contexts/ConfigProvider.svelte';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	let { children } = $props();

	// Initialize Vercel Analytics
	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>FastSvelte - Fullstack SaaS Starter Kit | FastAPI + SvelteKit</title>
	<meta
		name="description"
		content="FastSvelte is a comprehensive fullstack SaaS starter kit featuring FastAPI backend, SvelteKit frontend, PostgreSQL database, and premium Nexus-Svelte admin theme. Start building your SaaS application today."
	/>
	<meta
		name="keywords"
		content="FastAPI, SvelteKit, SaaS starter kit, fullstack, TypeScript, Python, PostgreSQL, admin dashboard"
	/>
	<meta name="author" content="FastSvelte" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://fastsvelte.dev/" />
	<meta
		property="og:title"
		content="FastSvelte - Fullstack SaaS Starter Kit | FastAPI + SvelteKit"
	/>
	<meta
		property="og:description"
		content="FastSvelte is a comprehensive fullstack SaaS starter kit featuring FastAPI backend, SvelteKit frontend, PostgreSQL database, and premium Nexus-Svelte admin theme. Start building your SaaS application today."
	/>
	<meta property="og:image" content="https://fastsvelte.dev/images/og-image.png" />
	<meta property="og:site_name" content="FastSvelte" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://fastsvelte.dev/" />
	<meta
		property="twitter:title"
		content="FastSvelte - Fullstack SaaS Starter Kit | FastAPI + SvelteKit"
	/>
	<meta
		property="twitter:description"
		content="FastSvelte is a comprehensive fullstack SaaS starter kit featuring FastAPI backend, SvelteKit frontend, PostgreSQL database, and premium Nexus-Svelte admin theme. Start building your SaaS application today."
	/>
	<meta property="twitter:image" content="https://fastsvelte.dev/images/og-image.png" />

	<!-- Additional SEO meta tags -->
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="language" content="en" />
	<meta name="revisit-after" content="7 days" />
	<link rel="canonical" href="https://fastsvelte.dev/" />

	<!-- JSON-LD Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"name": "FastSvelte",
			"applicationCategory": "DeveloperApplication",
			"operatingSystem": "Cross-platform",
			"description": "FastSvelte is a comprehensive fullstack SaaS starter kit featuring FastAPI backend, SvelteKit frontend, PostgreSQL database, and premium Nexus-Svelte admin theme.",
			"url": "https://fastsvelte.dev",
			"author": {
				"@type": "Organization",
				"name": "FastSvelte"
			},
			"offers": {
				"@type": "Offer",
				"priceCurrency": "USD",
				"price": "0",
				"description": "Open source SaaS starter kit"
			},
			"programmingLanguage": ["Python", "TypeScript", "JavaScript"],
			"runtimePlatform": ["FastAPI", "SvelteKit"],
			"downloadUrl": "https://docs.fastsvelte.dev",
			"screenshot": "https://fastsvelte.dev/images/landing/hero-dashboard.png"
		}
	</script>
</svelte:head>

<ConfigProvider>
	{@render children?.()}
</ConfigProvider>
