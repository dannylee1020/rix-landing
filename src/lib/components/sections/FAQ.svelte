<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
	import { slide } from 'svelte/transition';

	const faqs = [
		{
			question: 'Why does AI search matter for beauty brands?',
			answer:
				'Searches like "best sunscreen for oily skin" or "vitamin C serum under $30" used to happen on Google. Now they happen in AI search engines like  ChatGPT and Google AI Overviews. AI doesn\'t return ten blue links—it recommends specific products. If AI isn\'t recommending yours, you\'re invisible at the moment of decision.'
		},
		{
			question: 'How is Rix different from Shopify, GEO tools, and SEO platforms?',
			answer:
				"Shopify shows your own store data—they can't provide competitive intelligence without favoring some merchants over others. GEO tools spread across dozens of industries; we go deep on beauty. SEO platforms bolt on AI features to protect their core business; we're built for AI search from the start."
		},
		{
			question: 'What competitive insights do I get?',
			answer:
				"Share of voice across beauty queries—how often AI recommends you versus competitors. Gap analysis showing where competitors appear and you don't. Source intelligence revealing which publications AI cites when making recommendations."
		},
		{
			question: 'What do you track?',
			answer:
				'AI responses for queries relevant to your category—skincare routines, ingredient searches, product comparisons, "best of" lists. We track brand mentions, product recommendations, sentiment, and source citations across ChatGPT, Perplexity, Google AI Overviews, and Claude.'
		},
		{
			question: 'Which beauty brands is this for?',
			answer:
				'Skincare, makeup, haircare, bodycare—any beauty brand selling online and competing for visibility. We work with brands from $5M to $500M+ in revenue.'
		},
		{
			question: 'How does Rix collect data?',
			answer:
				'We run queries across AI platforms the same way consumers do, no API shortcuts, for maximum accuracy. Then we use proprietary prompt generation engine to generate high-intent real world questions that closely represent real user behaviors.'
		},
		{
			question: 'What publications and sources does AI rely on?',
			answer:
				"AI cites sources like Allure, Byrdie, Vogue, Dermstore, and Reddit when recommending products. Rix shows you exactly which sources get cited for your category—and whether you're mentioned in them."
		},
		{
			question: 'How often is data updated?',
			answer:
				"We run queries continuously and update your dashboard regularly. You'll see trends over time, not just a single snapshot."
		},
		{
			question: 'Can I see my competitors before signing up?',
			answer:
				'Yes. We can show you a sample of how AI talks about your brand and competitors during a demo. Most brands are surprised by what they find.'
		},
		{
			question: 'Do I need to install anything?',
			answer:
				'No. Rix works independently—we monitor AI platforms directly. No code, no pixels, no integration required to start.'
		},
		{
			question: 'How do I improve my AI visibility once I know where I stand?',
			answer:
				"Visibility is driven by the sources AI trusts. Rix shows you which publications matter and where you're missing. From there, it's about getting coverage in the right places—PR, reviews, content. We surface the gaps; you close them."
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
							class="ml-4 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-150 {openIndex ===
							index
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
