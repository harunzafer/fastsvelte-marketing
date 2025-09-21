<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let sessionId = $state<string | null>(null);
	let loading = $state(true);
	let error = $state<string | null>(null);

	onMount(() => {
		sessionId = $page.url.searchParams.get('session_id');
		loading = false;

		if (!sessionId) {
			error = 'Invalid session';
		}
	});
</script>

<svelte:head>
	<title>Purchase Successful - FastSvelte</title>
	<meta name="description" content="Your FastSvelte purchase was successful!" />
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-base-100 px-4">
	<div class="w-full max-w-md">
		{#if loading}
			<div class="text-center">
				<span class="loading loading-lg loading-spinner text-primary"></span>
				<p class="mt-4 text-base-content/70">Processing your purchase...</p>
			</div>
		{:else if error}
			<div class="card bg-error text-error-content">
				<div class="card-body text-center">
					<span class="mx-auto mb-4 iconify size-12 lucide--x-circle"></span>
					<h1 class="card-title justify-center text-2xl">Error</h1>
					<p>{error}</p>
					<div class="mt-6 card-actions justify-center">
						<a href="/" class="btn btn-ghost">Go Home</a>
					</div>
				</div>
			</div>
		{:else}
			<div class="card border border-base-300 bg-base-100 shadow-xl">
				<div class="card-body text-center">
					<span class="mx-auto mb-4 iconify size-16 text-success lucide--check-circle"></span>
					<h1 class="mb-4 card-title justify-center text-3xl">Purchase Successful!</h1>
					<p class="mb-6 text-lg text-base-content/70">
						Thank you for purchasing FastSvelte! Your payment has been processed successfully.
					</p>

					<div class="mb-6 rounded-lg border border-success/20 bg-success/10 p-6 text-left">
						<h2 class="mb-3 text-lg font-semibold text-success">What happens next?</h2>
						<ul class="space-y-3">
							<li class="flex items-start gap-3">
								<span class="mt-0.5 iconify size-5 flex-shrink-0 text-primary lucide--mail"></span>
								<span>You'll receive a confirmation email shortly</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="mt-0.5 iconify size-5 flex-shrink-0 text-primary lucide--github"
								></span>
								<span>GitHub repository access will be granted within 15 minutes</span>
							</li>
							<li class="flex items-start gap-3">
								<span class="mt-0.5 iconify size-5 flex-shrink-0 text-primary lucide--book-open"
								></span>
								<span>Access the documentation to get started</span>
							</li>
						</ul>
					</div>

					<div class="card-actions justify-center gap-4">
						<a href="https://docs.fastsvelte.dev" target="_blank" class="btn btn-primary">
							<span class="iconify size-4 lucide--external-link"></span>
							Documentation
						</a>
						<a href="/" class="btn btn-outline">
							<span class="iconify size-4 lucide--home"></span>
							Back Home
						</a>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
