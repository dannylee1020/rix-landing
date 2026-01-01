<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
	import { slide } from 'svelte/transition';

	const faqs = [
		{
			question: 'What is Rix?',
			answer:
				'Rix is an AI search analytics platform for e-commerce brands. We give you complete visibility into how AI platforms like ChatGPT and Google AI represent your brand, recommend your products, and drive traffic to your store.'
		},
		{
			question: 'Who is Rix for?',
			answer:
				'Marketing teams at e-commerce brands who want to understand and optimize their presence in AI search.'
		},
		{
			question: 'What do you track?',
			answer:
				'We track two things: (1) AI Engine Insights—how AI platforms mention your brand, which products they recommend, what sources they cite, and how you compare to competitors. (2) Traffic Analytics—visitors coming from AI platforms, their behavior on your site, and conversion to purchases.'
		},
		{
			question: 'Which AI platforms do you monitor?',
			answer:
				"We currently monitor ChatGPT and Google AI Overviews. We're continuously expanding coverage as AI search evolves."
		},
		{
			question: 'How do you generate search prompts?',
			answer:
				'We use a proprietary prompt generation engine to create diverse and relevant queries that simulate what high-intent real consumers would ask. This gives you visibility into how AI responds to natural shopping questions.'
		},
		{
			question: 'How do you track AI traffic to my store?',
			answer:
				'We provide integrations with Shopify and other e-commerce platforms. Our tracking identifies visitors coming from AI platforms and attributes sessions and conversions to specific AI sources.'
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
