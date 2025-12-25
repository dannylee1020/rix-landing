<script lang="ts">
	import Navigation from '$lib/components/sections/Navigation.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import HowItWorks from '$lib/components/sections/HowItWorks.svelte';
	import DetailedFeatures from '$lib/components/sections/DetailedFeatures.svelte';
	import FAQ from '$lib/components/sections/FAQ.svelte';
	import ClosingCTA from '$lib/components/sections/ClosingCTA.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
</script>

<svelte:head>
	<title>Rix - AI Search Analytics for E-commerce Brands</title>
	<meta
		name="description"
		content="AI search analytics for e-commerce brands. Track how ChatGPT and Google AI represent your products and drive traffic to your store."
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

	<!-- FAQ Schema Markup -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
				"@type": "Question",
				"name": "What is Rix?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Rix is an AI search analytics platform for e-commerce brands. We give you complete visibility into how AI platforms like ChatGPT and Google AI represent your brand, recommend your products, and drive traffic to your store."
				}
			},
			{
				"@type": "Question",
				"name": "Who is Rix for?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Marketing teams at e-commerce brands who want to understand and optimize their presence in AI search."
				}
			},
			{
				"@type": "Question",
				"name": "What do you track?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "We track two things: (1) AI Engine Insights—how AI platforms mention your brand, which products they recommend, what sources they cite, and how you compare to competitors. (2) Traffic Analytics—visitors coming from AI platforms, their behavior on your site, and conversion to purchases."
				}
			},
			{
				"@type": "Question",
				"name": "Which AI platforms do you monitor?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "We currently monitor ChatGPT and Google AI Overviews. We're continuously expanding coverage as AI search evolves."
				}
			},
			{
				"@type": "Question",
				"name": "How do you generate search prompts?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "We use a proprietary prompt generation engine to create diverse and relevant queries that simulate what high-intent real consumers would ask. This gives you visibility into how AI responds to natural shopping questions."
				}
			},
			{
				"@type": "Question",
				"name": "How do you track AI traffic to my store?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "We provide integrations with Shopify and other e-commerce platforms. Our tracking identifies visitors coming from AI platforms and attributes sessions and conversions to specific AI sources."
				}
			}
		]
	}
	</script>`}
</svelte:head>

<div class="bg-background text-foreground min-h-screen">
	<Navigation />
	<main>
		<Hero />
		<HowItWorks />
		<DetailedFeatures />
		<FAQ />
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
