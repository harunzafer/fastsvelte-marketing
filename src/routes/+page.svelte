<script lang="ts">
	import CTA from './landing/components/CTA.svelte';
	import FAQ from './landing/components/FAQ.svelte';
	import FeatureList from './landing/components/Features.svelte';
	import Footer from './landing/components/Footer.svelte';
	import Hero from './landing/components/Hero.svelte';
	import Pricing from './landing/components/Pricing.svelte';
	import Showcase from './landing/components/Showcase.svelte';
	import Testimonial from './landing/components/Testimonial.svelte';
	import TimeSavings from './landing/components/TimeSavings.svelte';
	import Topbar from './landing/components/Topbar.svelte';
</script>

<div class="bg-[var(--layout-background)]">
	<Topbar />
	<Hero />
	<FeatureList />
	<TimeSavings />
	<Showcase />
	<Testimonial />
	<Pricing />
	<CTA />
	<FAQ />
	<Footer />
</div>
