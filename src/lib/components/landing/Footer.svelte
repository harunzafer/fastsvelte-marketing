<script>
	import Logo from '$lib/components/Logo.svelte';
</script>

<div class="relative">
	<div class="grainy absolute inset-0 z-0 opacity-20"></div>

	<div class="relative z-[2] container pt-8 md:pt-12 xl:pt-16 2xl:pt-24">
		<div class="grid grid-cols-2 gap-6 md:grid-cols-6">
			<div class="col-span-2">
				<Logo />

				<p class="mt-3 text-base-content/80 max-sm:text-sm">
					Ship production-ready SaaS applications with FastAPI + SvelteKit. Complete authentication,
					payments, multi-tenancy, and admin dashboards - deploy anywhere with zero vendor lock-in.
				</p>
				<div class="mt-6 flex items-center gap-2.5 xl:mt-16">
					<a
						class="btn btn-circle btn-sm"
						href="https://github.com/harunzafer/fastsvelte"
						target="_blank"
						aria-label="Visit FastSvelte GitHub repository"
					>
						<span class="iconify size-4 lucide--github"></span>
					</a>
					<a
						class="btn btn-circle btn-sm"
						href="https://docs.fastsvelte.dev"
						target="_blank"
						aria-label="Visit FastSvelte documentation"
					>
						<span class="iconify size-3.5 lucide--book-open"></span>
					</a>
				</div>
			</div>
			<div class="max-md:hidden xl:col-span-1"></div>
			<div class="col-span-1">
				<p class="font-medium">Product</p>
				<div
					class="mt-5 flex flex-col space-y-1.5 text-base-content/80 *:cursor-pointer *:hover:text-base-content"
				>
					<a href="https://docs.fastsvelte.dev" target="_blank">Documentation</a>
					<a href="#features">Features</a>
					<a href="#pricing">Pricing</a>
				</div>
			</div>
			<div class="col-span-1">
				<p class="font-medium">Community</p>
				<div
					class="mt-5 flex flex-col space-y-1.5 text-base-content/80 *:cursor-pointer *:hover:text-base-content"
				>
					<a href="https://github.com/harunzafer/fastsvelte" target="_blank">GitHub</a>
					<a href="#newsletter">Newsletter</a>
					<a href="mailto:support@fastsvelte.dev">Support</a>
				</div>
			</div>
			<div class="col-span-1">
				<p class="font-medium">Legal</p>
				<div
					class="mt-5 flex flex-col space-y-1.5 text-base-content/80 *:cursor-pointer *:hover:text-base-content"
				>
					<a href="/privacy">Privacy Policy</a>
					<a href="/terms">Terms of Service</a>
					<a href="/license">License</a>
				</div>
			</div>
		</div>
		<div class="mt-12 flex flex-wrap justify-between gap-3 border-t border-base-300 py-6">
			<p>© 2025 FastSvelte. All rights reserved.</p>
			<span>
				🌼 Made with
				<a class="ms-1 link-primary link-hover" href="https://daisyui.com" target="_blank">
					daisyUI
				</a>
			</span>
		</div>
	</div>

	<p
		class="-mt-12 flex h-[195px] justify-center overflow-hidden text-[200px] font-black tracking-[12px] whitespace-nowrap text-base-content/5 select-none max-lg:hidden"
	>
		FASTSVELTE
	</p>
</div>
