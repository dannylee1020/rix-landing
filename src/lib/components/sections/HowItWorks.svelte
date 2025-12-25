<script lang="ts">
	import { Eye, TrendingUp } from '@lucide/svelte';

	type Tab = 'visibility' | 'traffic';
	let activeTab = $state<Tab>('visibility');

	const tabs = {
		visibility: {
			icon: Eye,
			title: 'Visibility',
			description: 'See how AI platforms represent your brand and recommend your products',
			image: '/visibility.png',
			imageAlt: 'Insights Dashboard showing AI search visibility metrics'
		},
		traffic: {
			icon: TrendingUp,
			title: 'Traffic',
			description: 'Track visitors from AI platforms and measure conversions to revenue',
			image: '/ai-traffic.png',
			imageAlt: 'AI Traffic Analysis Dashboard tracking customer journeys'
		}
	};
</script>

<section class="bg-white py-24">
	<div class="container mx-auto max-w-6xl px-6">
		<!-- Header -->
		<div class="mb-12 text-center">
			<span class="mb-4 inline-block text-xs font-semibold tracking-widest text-[#054af7]">
				SEARCH ANALYTICS
			</span>
			<h2 class="text-4xl font-semibold tracking-tight text-gray-900">
				Turn AI search into a
				<br /> measurable sales channel
			</h2>
		</div>

		<!-- Two Column Selectors -->
		<div class="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2">
			{#each Object.entries(tabs) as [key, tab]}
				{@const Icon = tab.icon}
				<button onclick={() => (activeTab = key as Tab)} class="group relative text-center">
					<Icon
						class="mx-auto mb-4 h-6 w-6 transition-colors {activeTab === key
							? 'text-[#054af7]'
							: 'text-gray-400 group-hover:text-gray-500'}"
					/>
					<h3
						class="mb-2 text-xl font-semibold transition-colors {activeTab === key
							? 'text-gray-900'
							: 'text-gray-400 group-hover:text-gray-600'}"
					>
						{tab.title}
					</h3>
					<p
						class="mx-auto max-w-xs text-sm leading-relaxed transition-colors {activeTab === key
							? 'text-gray-600'
							: 'text-gray-400 group-hover:text-gray-500'}"
					>
						{tab.description}
					</p>

					<!-- Bottom indicator bar -->
					<div
						class="mt-6 h-0.5 w-full rounded-full transition-all {activeTab === key
							? 'bg-[#054af7]'
							: 'bg-gray-200 group-hover:bg-gray-300'}"
					></div>
				</button>
			{/each}
		</div>

		<!-- Dashboard Image -->
		<div class="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
			<img
				src={tabs[activeTab].image}
				alt={tabs[activeTab].imageAlt}
				class="h-auto w-full"
				width="1816"
				height="1246"
				loading="lazy"
			/>
		</div>
	</div>
</section>
