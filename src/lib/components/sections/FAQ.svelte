<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
	import { slide } from 'svelte/transition';

	const faqs = [
		{
			question: 'Why does AI search matter for beauty brands?',
			answer:
				"Searches like 'best sunscreen for oily skin' or 'Vitamin C serum under $30' used to happen on Google. Now they happen in ChatGPT, Perplexity, and Google AI Overviews—and AI doesn't return ten blue links. It recommends specific products. If AI isn't recommending yours, you're invisible at the moment of decision."
		},
		{
			question: "How is Rix different from Shopify's AI analytics?",
			answer:
				"Shopify tells you orders and conversions from your store. Rix tells you what's happening before consumers even reach your site—how AI talks about your brand, who it recommends instead, and why."
		},
		{
			question: 'What competitive insights do I get?',
			answer:
				'Share of voice for beauty queries, gap analysis showing where competitors outrank you, and source intelligence showing which beauty publications AI relies on.'
		},
		{
			question: 'What do you track?',
			answer:
				'We monitor AI responses for queries relevant to your products—skincare routines, ingredient searches, product comparisons, "best of" lists. We track brand mentions, product recommendations, sentiment, and citations across ChatGPT, Perplexity, Google AI Overviews, and Claude.'
		},
		{
			question: 'Which beauty brands is this for?',
			answer:
				'Any brand selling skincare, makeup, haircare, or bodycare online. We work with brands from $5M to $500M+ in revenue—anyone competing for visibility in a crowded category.'
		}
	];

	let openIndex = $state<number | null>(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section id="faq" class="bg-white py-24">
	<div class="container mx-auto max-w-5xl px-6">
		<h2 class="mb-10 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
			Frequently Asked Questions
		</h2>

		<div class="divide-y divide-border">
			{#each faqs as faq, index}
				<div>
					<button
						class="flex w-full items-center justify-between py-5 text-left transition-colors duration-150"
						onclick={() => toggle(index)}
						aria-expanded={openIndex === index}
					>
						<span class="text-sm font-medium text-foreground">{faq.question}</span>
						<ChevronDown
							class="ml-4 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-150 {openIndex === index
								? 'rotate-180'
								: ''}"
						/>
					</button>
					{#if openIndex === index}
						<div transition:slide={{ duration: 150 }} class="pb-5">
							<p class="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
