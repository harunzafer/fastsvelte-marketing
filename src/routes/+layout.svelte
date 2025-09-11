<script lang="ts">
	import '../app.css';
	import ConfigProvider from '$lib/contexts/ConfigProvider.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>FastSvelte</title>
	<meta name="description" content="FastSvelte - Modern SaaS Starter Kit" />
</svelte:head>

<ConfigProvider>
	{@render children?.()}
</ConfigProvider>
