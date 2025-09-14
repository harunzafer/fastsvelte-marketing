<script lang="ts">
	import CTA from '$lib/components/landing/CTA.svelte';
	import FAQ from '$lib/components/landing/FAQ.svelte';
	import FeatureList from '$lib/components/landing/Features.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import Pricing from '$lib/components/landing/Pricing.svelte';
	import Testimonial from '$lib/components/landing/Testimonial.svelte';
	import TimeSavings from '$lib/components/landing/TimeSavings.svelte';
	import Topbar from '$lib/components/landing/Topbar.svelte';
</script>

<div class="bg-[var(--layout-background)]">
	<Topbar />
	<Hero />
	<FeatureList />
	<TimeSavings />
	<!-- <Showcase /> -->
	<!-- <Testimonial /> -->
	<Pricing />
	<CTA />
	<FAQ />
	<Footer />
</div>
