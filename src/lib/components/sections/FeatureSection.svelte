<script lang="ts">
	import type { Component } from 'svelte';

	interface Feature {
		icon: Component;
		title: string;
		description: string;
	}

	interface Props {
		label: string;
		headline: string;
		description: string;
		image: string;
		imageAlt: string;
		features: Feature[];
	}

	let { label, headline, description, image, imageAlt, features }: Props = $props();
</script>

<section class="mx-auto max-w-6xl px-6">
	<!-- Header row with dotted borders - left aligned -->
	<div class="header-row-dotted">
		<div class="px-6 py-16 text-left md:px-10 md:py-20">
			<span class="mb-4 block text-xs font-semibold tracking-widest text-[var(--brand)] uppercase">
				{label}
			</span>
			<h2
				class="mb-5 text-2xl leading-[1.15] font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl"
			>
				{@html headline}
			</h2>
			<p class="max-w-sm text-sm leading-relaxed text-muted-foreground">
				{@html description}
			</p>
		</div>
	</div>

	<div class="grid-container-bordered">
		<!-- Horizontal divider -->
		<div class="grid-divider"></div>

		<!-- Image row -->
		<div class="pt-6 pb-0">
			<!-- Browser chrome -->
			<div class="mb-4 flex gap-1.5 px-6 md:px-10">
				<div class="h-3 w-3 rounded-full bg-[#ff5f57]"></div>
				<div class="h-3 w-3 rounded-full bg-[#febc2e]"></div>
				<div class="h-3 w-3 rounded-full bg-[#28c840]"></div>
			</div>
			<div class="overflow-hidden border-t border-[var(--grid-line-strong)] bg-white">
				<img src={image} alt={imageAlt} class="h-auto w-full" loading="lazy" />
			</div>
		</div>

		<!-- Horizontal divider -->
		<div class="grid-divider"></div>

		<!-- Feature cards row - 4 column grid -->
		<div class="feature-grid">
			{#each features as feature, index}
				{@const Icon = feature.icon}
				<div class="feature-card {index > 0 ? 'feature-card-border' : ''}">
					<div
						class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-light)]"
					>
						<Icon class="h-5 w-5 text-[var(--brand)]" />
					</div>
					<h3 class="mb-2 text-sm font-semibold text-foreground">
						{feature.title}
					</h3>
					<p class="text-sm leading-relaxed text-muted-foreground">
						{feature.description}
					</p>
				</div>
			{/each}
		</div>

		<!-- Bottom divider to close the container -->
		<div class="grid-divider"></div>
	</div>
</section>

<style>
	.header-row-dotted {
		position: relative;
	}

	.header-row-dotted::before,
	.header-row-dotted::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		width: 1px;
		background-image: linear-gradient(
			to bottom,
			var(--grid-line-strong) 0px,
			var(--grid-line-strong) 6px,
			transparent 6px,
			transparent 12px
		);
		background-size: 1px 12px;
		background-repeat: repeat-y;
	}

	.header-row-dotted::before {
		left: 0;
	}

	.header-row-dotted::after {
		right: 0;
	}

	.feature-card {
		padding: 24px;
	}

	@media (min-width: 640px) {
		.feature-card {
			padding: 32px;
		}
	}

	/* Vertical borders between cards on desktop */
	@media (min-width: 1024px) {
		.feature-card-border {
			border-left: 1px solid var(--grid-line-strong);
		}
	}

	/* Vertical borders for 2-column layout on tablet */
	@media (min-width: 640px) and (max-width: 1023px) {
		.feature-card:nth-child(2n) {
			border-left: 1px solid var(--grid-line-strong);
		}
		.feature-card:nth-child(n + 3) {
			border-top: 1px solid var(--grid-line-strong);
		}
	}

	/* Horizontal borders for mobile single column */
	@media (max-width: 639px) {
		.feature-card:not(:first-child) {
			border-top: 1px solid var(--grid-line-strong);
		}
	}
</style>
