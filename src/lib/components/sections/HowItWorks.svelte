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
	<div class="container mx-auto max-w-5xl px-6">
		<!-- Header -->
		<div class="mb-16 text-center">
			<span class="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--brand)]">
				Search Analytics
			</span>
			<h2 class="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
				Turn AI search into a
				<br class="hidden md:block" /> measurable sales channel
			</h2>
		</div>

		<!-- Tab Selectors -->
		<div class="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each Object.entries(tabs) as [key, tab]}
				{@const Icon = tab.icon}
				<button
					onclick={() => (activeTab = key as Tab)}
					class="group relative cursor-pointer text-center transition-all duration-150"
				>
					<div class="mb-4 flex justify-center">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-150 {activeTab === key
								? 'bg-[var(--brand-light)]'
								: 'bg-muted'}"
						>
							<Icon
								class="h-5 w-5 transition-colors duration-150 {activeTab === key
									? 'text-[var(--brand)]'
									: 'text-muted-foreground group-hover:text-foreground'}"
							/>
						</div>
					</div>
					<h3
						class="mb-2 text-lg font-semibold transition-colors duration-150 {activeTab === key
							? 'text-foreground'
							: 'text-muted-foreground group-hover:text-foreground'}"
					>
						{tab.title}
					</h3>
					<p
						class="mx-auto max-w-xs text-sm leading-relaxed transition-colors duration-150 {activeTab === key
							? 'text-muted-foreground'
							: 'text-muted-foreground/60 group-hover:text-muted-foreground'}"
					>
						{tab.description}
					</p>

					<!-- Bottom indicator bar -->
					<div
						class="mx-auto mt-6 h-0.5 w-full max-w-[200px] rounded-full transition-all duration-150 {activeTab === key
							? 'bg-[var(--brand)]'
							: 'bg-border group-hover:bg-border'}"
					></div>
				</button>
			{/each}
		</div>

		<!-- Dashboard Image -->
		<div class="overflow-hidden rounded-xl border border-border shadow-sm">
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
