<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let scrollPosition = $state(0);
	let scrolling = $state<'up' | 'down' | undefined>(undefined);

	let prevScrollPosition = $state(0);

	const handleScroll = () => {
		setTimeout(() => {
			prevScrollPosition = scrollPosition;
			scrollPosition = window.scrollY;
		}, 200);
	};

	$effect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		if (scrollPosition < 500) {
			scrolling = undefined;
		} else {
			if (scrollPosition - prevScrollPosition > 0) {
				scrolling = 'down';
			} else if (scrollPosition - prevScrollPosition < 0) {
				scrolling = 'up';
			}
		}
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div
	data-scrolling={scrolling}
	data-at-top={scrollPosition < 30}
	class="group fixed inset-x-0 z-[60] flex justify-center transition-[top] duration-500 data-[scrolling=down]:-top-full sm:container [&:not([data-scrolling=down])]:top-4"
>
	<div
		class="flex w-full items-center justify-between px-3 py-3 transition-all duration-500 group-data-[at-top=false]:w-[800px] group-data-[at-top=false]:bg-base-100 group-data-[at-top=false]:shadow sm:rounded-full sm:px-6 lg:py-1.5 group-data-[at-top=false]:dark:bg-base-200"
	>
		<div class="flex items-center gap-2">
			<div class="flex-none lg:hidden">
				<div class="drawer">
					<input id="landing-menu-drawer" type="checkbox" class="drawer-toggle" />
					<div class="drawer-content">
						<label for="landing-menu-drawer" class="drawer-button btn btn-square btn-ghost btn-sm">
							<span class="iconify size-4.5 lucide--menu" />
						</label>
					</div>
					<div class="drawer-side z-[50]">
						<label for="landing-menu-drawer" aria-label="close sidebar" class="drawer-overlay"
						></label>
						<ul class="menu min-h-full w-80 bg-base-100 p-4 text-base-content">
							<li>
								<a href="/dashboards/ecommerce">Dashboard</a>
							</li>
							<li>
								<a href="/components">Components</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<a href="/dashboards/ecommerce">
				<Logo />
			</a>
		</div>
		<ul class="menu menu-horizontal hidden gap-2 px-0 lg:inline-flex">
			<li>
				<a href="/dashboards/ecommerce">Dashboard</a>
			</li>
			<li>
				<a href="/components">Components</a>
			</li>
		</ul>
		<div class="inline-flex items-center gap-3">
			<ThemeToggle class="btn btn-square border-transparent btn-ghost btn-sm" />
			<a
				href="https://daisyui.com/store/244268?aff=Db6q2"
				target="_blank"
				class="group/purchase btn relative gap-2 border-0 bg-linear-to-r from-primary to-secondary text-sm text-primary-content btn-sm max-sm:btn-square"
			>
				<span class="iconify size-4 lucide--shopping-cart" />
				<span class="max-sm:hidden">Buy Now</span>
				<div
					class="absolute inset-x-0 top-1 -z-1 h-8 bg-linear-to-r from-primary to-secondary opacity-40 blur-md transition-all duration-500 group-hover/purchase:opacity-60 group-hover/purchase:blur-lg"
				></div>
			</a>
		</div>
	</div>
</div>
