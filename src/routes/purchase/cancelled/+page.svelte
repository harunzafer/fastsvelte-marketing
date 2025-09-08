<svelte:head>
	<title>Purchase Cancelled - FastSvelte</title>
	<meta name="description" content="Your FastSvelte purchase was cancelled." />
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-base-100 px-4">
	<div class="w-full max-w-md">
		<div class="card bg-warning text-warning-content">
			<div class="card-body text-center">
				<span class="mx-auto mb-4 iconify size-16 lucide--x-circle"></span>
				<h1 class="mb-4 card-title justify-center text-3xl">Purchase Cancelled</h1>
				<p class="mb-6 text-lg">Your purchase was cancelled. No payment has been processed.</p>

				<div class="mb-6 rounded-lg bg-warning-content/10 p-6 text-left">
					<h2 class="mb-3 text-lg font-semibold">Still interested in FastSvelte?</h2>
					<ul class="space-y-2">
						<li class="flex items-start gap-2">
							<span class="mt-0.5 iconify size-5 flex-shrink-0 lucide--help-circle"></span>
							<span>Check our FAQ for common questions</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-0.5 iconify size-5 flex-shrink-0 lucide--book-open"></span>
							<span>View the documentation to learn more</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-0.5 iconify size-5 flex-shrink-0 lucide--mail"></span>
							<span>Contact us if you have any questions</span>
						</li>
					</ul>
				</div>

				<div class="card-actions justify-center space-x-4">
					<a href="/#pricing" class="btn btn-outline">
						<span class="iconify size-4 lucide--credit-card"></span>
						Try Again
					</a>
					<a href="https://docs.fastsvelte.dev" target="_blank" class="btn btn-ghost">
						<span class="iconify size-4 lucide--book-open"></span>
						Documentation
					</a>
					<a href="/" class="btn btn-ghost">
						<span class="iconify size-4 lucide--home"></span>
						Home
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
