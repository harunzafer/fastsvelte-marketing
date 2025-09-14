<script lang="ts">
	import Swiper from 'swiper';
	import 'swiper/css';
	import { Autoplay, Navigation, Pagination } from 'swiper/modules';

	const testimonials = [
		{
			id: 'landing-testimonial-1',
			image: '/images/avatars/1.png',
			name: 'Sarah Chen',
			role: 'Full-Stack Developer',
			comment:
				'FastSvelte saved me months of work. The Python backend is perfect for my AI features, and the SvelteKit frontend gives amazing performance. Finally, a starter that gets both worlds right.'
		},
		{
			id: 'landing-testimonial-2',
			image: '/images/avatars/4.png',
			name: 'Mike Rodriguez',
			role: 'Startup Founder',
			comment:
				'Deployed my SaaS in 3 days instead of 3 months. The authentication, payments, and multi-tenancy just work. No vendor lock-in means I can scale anywhere. FastSvelte is a game-changer.'
		},
		{
			id: 'landing-testimonial-3',
			image: '/images/avatars/5.png',
			name: 'Alex Kumar',
			role: 'Python Developer',
			comment:
				'Love the clean architecture and dependency injection. Coming from Django, FastSvelte feels professional yet modern. The dashboard components are beautifully crafted.'
		}
	] as const;

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
			prevEl: '.testimonial-swiper-button-prev',
			nextEl: '.testimonial-swiper-button-next'
		},
		modules: [Navigation, Pagination, Autoplay]
	};

	$effect(() => {
		new Swiper('#testimonial-swiper', swiperOptions);
	});
</script>

<section id="testimonial" class="relative container py-8 md:py-12 xl:py-16 2xl:py-24">
	<div
		class="absolute inset-0 bg-[url('/images/landing/testimonial-background.svg')] bg-cover bg-center bg-no-repeat opacity-8 dark:opacity-6"
	></div>

	<div class="relative">
		<div class="text-center">
			<div
				class="inline-flex items-center rounded-box border border-orange-500/10 bg-orange-500/5 p-2"
			>
				<span class="iconify size-5 text-orange-600 lucide--sparkles"></span>
			</div>
			<h2 class="mt-4 text-2xl font-semibold sm:text-3xl">Developers Love FastSvelte</h2>
			<p class="mt-3 inline-block max-w-lg text-base-content/70 max-sm:text-sm">
				Join hundreds of developers who've launched successful SaaS applications with FastSvelte's
				powerful foundation.
			</p>
		</div>

		<div class="relative mt-24 w-full">
			<div class="swiper" id="testimonial-swiper">
				<div class="swiper-wrapper">
					{#each testimonials as testimonial, index (index)}
						<div class="swiper-slide flex flex-col items-center justify-center">
							<div class="text-center">
								<div class="avatar">
									<div class="mask w-24 bg-base-200 mask-squircle">
										<img src={testimonial.image} alt="testimonial" />
									</div>
								</div>
								<p class="mt-6 text-xl font-medium">{testimonial.name}</p>
								<p class="text-base-content/80">{testimonial.role}</p>
								<div class="mt-6 flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										class="size-6 text-yellow-500"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
										></path>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										class="size-6 text-yellow-500"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
										></path>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										class="size-6 text-yellow-500"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
										></path>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										class="size-6 text-yellow-500"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
										></path>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										class="size-6 text-yellow-500"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
										></path>
									</svg>
								</div>
								<p class="mt-6 inline-block max-w-[600px]">{testimonial.comment}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div
				class="absolute top-1/2 right-5 left-5 z-1 flex -translate-y-1/2 transform justify-between"
			>
				<button class="testimonial-swiper-button-prev btn btn-circle" aria-label="prev">
					<span class="iconify size-4 lucide--chevron-left"></span>
				</button>
				<button class="testimonial-swiper-button-next btn btn-circle" aria-label="next">
					<span class="iconify size-4 lucide--chevron-right"></span>
				</button>
			</div>
		</div>
	</div>
</section>
