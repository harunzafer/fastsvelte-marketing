<script lang="ts">
    import BundleOffer from "./components/BundleOffer.svelte";
    import CTA from "./components/CTA.svelte";
    import FAQ from "./components/FAQ.svelte";
    import FeatureList from "./components/Features.svelte";
    import Footer from "./components/Footer.svelte";
    import Hero from "./components/Hero.svelte";
    import Showcase from "./components/Showcase.svelte";
    import Testimonial from "./components/Testimonial.svelte";
    import Topbar from "./components/Topbar.svelte";
</script>

<div class="bg-[var(--layout-background)]">
    <Topbar />
    <Hero />
    <FeatureList />
    <Showcase />
    <Testimonial />
    <CTA />
    <FAQ />
    <BundleOffer />
    <Footer />
</div>
