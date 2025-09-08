<script lang="ts">
	import '../app.css';
	import ConfigProvider from '$lib/contexts/ConfigProvider.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>FastSvelte Marketing</title>
	<meta name="description" content="FastSvelte - Modern SaaS Starter Kit" />
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<ConfigProvider>
	{@render children?.()}
</ConfigProvider>
