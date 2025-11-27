<script lang="ts">
	import Navigation from '$lib/components/sections/Navigation.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import HowItWorks from '$lib/components/sections/HowItWorks.svelte';
	import ClosingCTA from '$lib/components/sections/ClosingCTA.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
</script>

<svelte:head>
	<title>Rix - AI Search Analytics for E-commerce Brands</title>
	<meta
		name="description"
		content="Track, analyze, and optimize how your products appear in AI-powered search across AI platforms."
	/>
	<meta
		name="keywords"
		content="AI search analytics, e-commerce products, shopping optimization, ChatGPT shopping, Gemini shopping, Claude, product visibility, AI Commerce"
	/>
	<link rel="canonical" href="https://tryrix.com/" />
	<meta property="og:title" content="Rix - AI Search Analytics for E-Commerce Brands" />
	<meta
		property="og:description"
		content="AI search analytics specialized for e-commerce brands. Optimize how your products appear in AI-powered shopping."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://tryrix.com/" />
	<meta property="og:site_name" content="Rix" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Rix - AI Search Analytics for E-Commerce Brands" />
	<meta
		name="twitter:description"
		content="AI search analytics specialized for e-commerce brands. Optimize how your products appear in AI-powered shopping."
	/>
</svelte:head>

<div class="bg-background text-foreground min-h-screen">
	<Navigation />
	<main>
		<Hero />
		<HowItWorks />
		<ClosingCTA />
	</main>
	<Footer />
</div>

<style>
	/* Smooth scrolling for anchor links */
	:global(html) {
		scroll-behavior: smooth;
	}

	/* Hide scrollbar for a cleaner look while maintaining functionality */
	:global(body) {
		scrollbar-width: thin;
		scrollbar-color: hsl(var(--muted)) transparent;
	}

	:global(body::-webkit-scrollbar) {
		width: 8px;
	}

	:global(body::-webkit-scrollbar-track) {
		background: transparent;
	}

	:global(body::-webkit-scrollbar-thumb) {
		background: hsl(var(--muted));
		border-radius: 4px;
	}

	:global(body::-webkit-scrollbar-thumb:hover) {
		background: hsl(var(--muted-foreground));
	}
</style>
