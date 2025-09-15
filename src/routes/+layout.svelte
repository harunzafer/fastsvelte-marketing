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
	<title>FastSvelte</title>
	<meta name="description" content="FastSvelte - Modern SaaS Starter Kit" />
</svelte:head>

<ConfigProvider>
	{@render children?.()}
</ConfigProvider>
