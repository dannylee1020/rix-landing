<script lang="ts">
	import Navigation from '$lib/components/sections/Navigation.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import FeatureSection from '$lib/components/sections/FeatureSection.svelte';
	import FAQ from '$lib/components/sections/FAQ.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';

	import {
		Eye,
		MessageSquare,
		ThumbsUp,
		TrendingUp,
		ChartNoAxesColumn,
		Search,
		Compass,
		FileText
	} from '@lucide/svelte';

	const visibilityFeatures = [
		{
			icon: Eye,
			title: 'Brand Monitoring',
			description: 'Track how ChatGPT, Perplexity, and Google AI describe your brand and products.'
		},
		{
			icon: ThumbsUp,
			title: 'Sentiment & Positioning',
			description:
				'Is AI calling you "affordable" when you\'re positioning as premium? Know how AI frames you.'
		},
		{
			icon: MessageSquare,
			title: 'Product Recommendations',
			description: 'Which of your SKUs get recommended, for which queries, and how often.'
		},
		{
			icon: TrendingUp,
			title: 'Trend Detection',
			description: 'See emerging queries and topics gaining traction before your competitors do.'
		}
	];

	const competitiveFeatures = [
		{
			icon: ChartNoAxesColumn,
			title: 'Share of Voice',
			description:
				'How often AI recommends you vs. competitors for queries like "best retinol serum."'
		},
		{
			icon: Search,
			title: 'Gap Analysis',
			description: "Topics where competitors get recommended and you don't. Find out why."
		},
		{
			icon: Compass,
			title: 'Opportunity Mapping',
			description: 'Queries with no dominant brand—categories you can own before competitors do.'
		},
		{
			icon: FileText,
			title: 'Source Intelligence',
			description:
				"Which publications AI cites when recommending products. See who's driving AI's picks."
		}
	];
</script>

<svelte:head>
	<title>Rix - AI Search Analytics for Beauty Brands</title>
	<meta
		name="description"
		content="AI search analytics for beauty brands. See how AI recommends products, which brands dominate your category, and why consumers find your competitors instead of you."
	/>
	<meta
		name="keywords"
		content="AI search analytics, beauty brands, skincare, makeup, haircare, ChatGPT shopping, AI product recommendations, beauty marketing"
	/>
	<link rel="canonical" href="https://tryrix.com/" />
	<meta property="og:title" content="Rix - AI Search Analytics for Beauty Brands" />
	<meta
		property="og:description"
		content="AI search analytics for beauty brands. See how AI recommends products, which brands dominate your category, and why consumers find your competitors instead of you."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://tryrix.com/" />
	<meta property="og:site_name" content="Rix" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Rix - AI Search Analytics for Beauty Brands" />
	<meta
		name="twitter:description"
		content="AI search analytics for beauty brands. See how AI recommends products, which brands dominate your category, and why consumers find your competitors instead of you."
	/>

	<!-- FAQ Schema Markup -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
				"@type": "Question",
				"name": "Why does AI search matter for beauty brands?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Searches like 'best sunscreen for oily skin' or 'Vitamin C serum under $30' used to happen on Google. Now they happen in ChatGPT, Perplexity, and Google AI Overviews—and AI doesn't return ten blue links. It recommends specific products. If AI isn't recommending yours, you're invisible at the moment of decision."
				}
			},
			{
				"@type": "Question",
				"name": "How is Rix different from Shopify's AI analytics?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Shopify tells you orders and conversions from your store. Rix tells you what's happening before consumers even reach your site—how AI talks about your brand, who it recommends instead, and why."
				}
			},
			{
				"@type": "Question",
				"name": "What competitive insights do I get?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Share of voice for beauty queries, gap analysis showing where competitors outrank you, and source intelligence showing which beauty publications AI relies on."
				}
			},
			{
				"@type": "Question",
				"name": "What do you track?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "We monitor AI responses for queries relevant to your products—skincare routines, ingredient searches, product comparisons, 'best of' lists. We track brand mentions, product recommendations, sentiment, and citations across ChatGPT, Perplexity, Google AI Overviews, and Claude."
				}
			},
			{
				"@type": "Question",
				"name": "Which beauty brands is this for?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Any brand selling skincare, makeup, haircare, or bodycare online. We work with brands from $5M to $500M+ in revenue—anyone competing for visibility in a crowded category."
				}
			}
		]
	}
	</script>`}
</svelte:head>

<div class="min-h-screen bg-background text-foreground">
	<Navigation />
	<main>
		<Hero />
		<FeatureSection
			label="AI Visibility"
			headline="See how AI platforms<br />talk about you"
			description="See your brand through AI's eyes—visibility rankings, product recommendations, trusted sources, and the exact language AI uses to describe you."
			image="/overview.png"
			imageAlt="AI Visibility Dashboard"
			features={visibilityFeatures}
		/>
		<FeatureSection
			label="Competitive Intelligence"
			headline="Know where you win<br />and where you lose"
			description="Discover where competitors win, the sources AI trusts across your category, and where to focus your content efforts."
			image="/competition.png"
			imageAlt="Competitive Intelligence Dashboard"
			features={competitiveFeatures}
		/>
		<FAQ />
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
