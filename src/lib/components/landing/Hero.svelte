<script lang="ts">
	import Swiper from 'swiper';
	import 'swiper/css';
	import { Autoplay, Navigation, Pagination } from 'swiper/modules';

	const swiperOptions = {
		slidesPerView: 1,
		cardsEffect: {
			rotate: false,
			perSlideOffset: 10,
			slideShadows: false
		},
		loop: true,
		speed: 1500,
		autoplay: {
			delay: 5000
		},
		spaceBetween: 20,
		navigation: {
			prevEl: '.hero-swiper-button-prev',
			nextEl: '.hero-swiper-button-next'
		},
		modules: [Navigation, Pagination, Autoplay]
	};

	$effect(() => {
		new Swiper('#hero-swiper', swiperOptions);
	});
</script>

<div class="relative">
	<div
		class="absolute inset-0 -top-2 h-[1600px] bg-[url(/images/landing/hero-bg-gradient.png)] [background-size:200%_60%] bg-no-repeat opacity-20 [background-position-x:center] sm:[background-size:100%_100%] dark:opacity-15"
	></div>

	<div class="relative z-10 container py-28 xl:py-40">
		<div class="flex flex-col items-center">
			<a
				class="flex items-center gap-1.5 rounded-full border border-white/60 bg-white/40 py-0.5 ps-1 pe-2 text-sm transition-all hover:bg-white/60 dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10"
				href="https://docs.fastsvelte.dev"
				target="_blank"
			>
				<div
					class="flex items-center justify-center rounded-full border border-primary/10 bg-primary/10 px-1.5 py-0 text-xs font-medium text-primary dark:border-primary/20 dark:bg-primary/20"
				>
					NEW
				</div>
				FastAPI + Svelte 5
			</a>
			<div
				class="mt-4 max-w-[1000px] transition-all duration-1000 starting:scale-125 starting:opacity-0 starting:blur-sm"
			>
				<p
					class="text-center text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl"
				>
					Ship Your SaaS in
					<span
						class="animated-text bg-linear-to-r from-purple-500 via-blue-500 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400"
					>
						Hours, Not Months
					</span>
				</p>
			</div>
			<div
				class="mt-4 max-w-[750px] transition-all duration-1000 sm:mt-6 xl:mt-8 starting:opacity-0 starting:blur-sm"
			>
				<p class="text-center max-sm:text-sm md:text-lg">
					The only FastAPI + SvelteKit starter that gives you Python backend power, SPA frontend
					performance, and deploy-anywhere freedom
				</p>
			</div>

			<div
				class="mt-6 inline-flex items-center gap-2.5 transition-all delay-300 duration-1000 sm:gap-5 xl:mt-10 starting:opacity-0 starting:blur-sm"
			>
				<a
					href="https://docs.fastsvelte.dev"
					target="_blank"
					class="btn gap-2.5 btn-lg btn-primary"
				>
					<span class="iconify size-5 lucide--rocket sm:size-5.5"></span>
					<div class="text-start">
						<p class="text-sm/none">Get Started</p>
						<p class="mt-px text-[11px]/none text-primary-content/70">5-min setup</p>
					</div>
				</a>
				<a
					href="#features"
					class="btn gap-3 !border-transparent text-base btn-ghost btn-lg btn-neutral dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
				>
					<span class="iconify size-5 lucide--wand-2 sm:size-5.5"></span>
					View Features
				</a>
			</div>
			<div
				class="group relative mt-8 max-w-full md:mt-16 md:max-w-xl lg:max-w-3xl xl:mt-20 xl:max-w-5xl 2xl:max-w-6xl"
			>
				<div
					class="dark:border-px relative rounded-lg border-2 border-base-100/20 bg-base-100/30 py-2 dark:border-white/2 dark:bg-white/4"
				>
					<div class="swiper" id="hero-swiper">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<div class="mx-2">
									<div class="relative">
										<img
											src="/images/landing/dashboard-admin-users-light.png"
											class="h-full w-full rounded-lg dark:hidden"
											alt="hero-landing"
										/>
										<img
											src="/images/landing/dashboard-admin-users-dark.png"
											class="hidden h-full w-full rounded-lg dark:block"
											alt="hero-landing"
										/>
										<div
											class="absolute inset-0 flex items-end justify-center rounded-lg bg-linear-to-b from-transparent from-[50%] via-black/20 via-[80%] to-black/80 opacity-0 transition-all duration-300 group-hover:opacity-100"
										>
											<div
												class="mb-8 gap-2.5 rounded-box bg-white px-4 py-2 text-sm font-medium text-black/80"
											>
												Admin Users Dashboard
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="mx-2">
									<div class="relative">
										<img
											src="/images/landing/dashboard-admin-analytics-light.png"
											class="h-full w-full rounded-lg dark:hidden"
											alt="hero-landing"
										/>
										<img
											src="/images/landing/dashboard-admin-analytics-dark.png"
											class="hidden h-full w-full rounded-lg dark:block"
											alt="hero-landing"
										/>
										<div
											class="absolute inset-0 flex items-end justify-center rounded-lg bg-linear-to-b from-transparent from-[50%] via-black/20 via-[80%] to-black/80 opacity-0 transition-all duration-300 group-hover:opacity-100"
										>
											<div
												class="mb-8 gap-2.5 rounded-box bg-white px-4 py-2 text-sm font-medium text-black/80"
											>
												Analytics Dashboard
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="mx-2">
									<div class="relative">
										<img
											src="/images/landing/dashboard-user-main-light.png"
											class="h-full w-full rounded-lg dark:hidden"
											alt="hero-landing"
										/>
										<img
											src="/images/landing/dashboard-user-main-dark.png"
											class="hidden h-full w-full rounded-lg dark:block"
											alt="hero-landing"
										/>
										<div
											class="absolute inset-0 flex items-end justify-center rounded-lg bg-linear-to-b from-transparent from-[50%] via-black/20 via-[80%] to-black/80 opacity-0 transition-all duration-300 group-hover:opacity-100"
										>
											<div
												class="mb-8 gap-2.5 rounded-box bg-white px-4 py-2 text-sm font-medium text-black/80"
											>
												User Dashboard
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="mx-2">
									<div class="relative">
										<img
											src="/images/landing/dashboard-user-notes-light.png"
											class="h-full w-full rounded-lg dark:hidden"
											alt="hero-landing"
										/>
										<img
											src="/images/landing/dashboard-user-notes-dark.png"
											class="hidden h-full w-full rounded-lg dark:block"
											alt="hero-landing"
										/>
										<div
											class="absolute inset-0 flex items-end justify-center rounded-lg bg-linear-to-b from-transparent from-[50%] via-black/20 via-[80%] to-black/80 opacity-0 transition-all duration-300 group-hover:opacity-100"
										>
											<div
												class="mb-8 gap-2.5 rounded-box bg-white px-4 py-2 text-sm font-medium text-black/80"
											>
												Demo Application (Sample)
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					class="absolute z-1 flex justify-between max-md:start-1/2 max-md:-bottom-12 max-md:-translate-x-1/2 max-md:gap-3 md:-inset-x-24 md:top-1/2 md:-translate-y-1/2"
				>
					<button
						class="hero-swiper-button-prev flex size-8 cursor-pointer items-center justify-center rounded-full border-base-200 bg-white shadow-xs transition-all hover:shadow-md max-md:shadow md:size-10 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
						aria-label="Previous slide"
					>
						<span class="iconify size-5 lucide--chevron-left"></span>
					</button>
					<button
						class="hero-swiper-button-next flex size-8 cursor-pointer items-center justify-center rounded-full border-base-200 bg-white shadow-xs transition-all hover:shadow-md max-md:shadow md:size-10 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
						aria-label="Next slide"
					>
						<span class="iconify size-5 lucide--chevron-right"></span>
					</button>
				</div>
			</div>

			<div class="mt-16 text-center">
				<p class="font-medium text-base-content/60">Built With Modern Stack</p>
				<div class="mt-4 flex flex-wrap items-center justify-center gap-6">
					<div class="tooltip" data-tip="FastAPI - High performance Python web framework">
						<img src="/images/landing/logo-fastapi.svg" class="size-7 sm:size-9" alt="FastAPI" />
					</div>
					<div class="tooltip" data-tip="SvelteKit 2 - Full-stack framework">
						<img src="/images/landing/logo-svelte.svg" class="size-7 sm:size-9" alt="SvelteKit" />
					</div>
					<div class="tooltip" data-tip="PostgreSQL - Reliable database">
						<img
							src="/images/landing/logo-postgresql.svg"
							class="size-7 sm:size-9"
							alt="PostgreSQL"
						/>
					</div>
					<div class="tooltip" data-tip="TypeScript 5 - Type safety">
						<img src="/images/landing/logo-ts.svg" class="size-7 sm:size-9" alt="TypeScript" />
					</div>
					<div class="tooltip" data-tip="Docker - Containerization">
						<img src="/images/landing/logo-docker.svg" class="size-7 sm:size-9" alt="Docker" />
					</div>
					<div class="tooltip" data-tip="TailwindCSS 4 - Styling">
						<img
							src="/images/landing/logo-tailwind.svg"
							class="size-7 sm:size-9"
							alt="Tailwind CSS"
						/>
					</div>
					<div class="tooltip" data-tip="DaisyUI 5 - Component Library">
						<img src="/images/landing/logo-daisyui.svg" class="size-7 sm:size-9" alt="DaisyUI" />
					</div>
				</div>
			</div>
		</div>
		<div
			class="absolute start-16 top-60 animate-bounce-slow opacity-80 max-xl:hidden dark:opacity-60"
		>
			<img src="/images/landing/hero-widget-1.png" class="h-30" alt="Hero 1" />
		</div>
		<div
			class="absolute end-0 top-160 animate-bounce-slow opacity-80 max-xl:hidden dark:opacity-60"
		>
			<img src="/images/landing/hero-widget-2.png" class="h-30" alt="Hero 2" />
		</div>
	</div>
</div>
