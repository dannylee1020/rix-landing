<script lang="ts">
</script>

<section class="mx-auto max-w-6xl bg-white px-6">
	<div class="grid-container-bordered relative">
		<!-- Dot grid background with fade from bottom to top -->
		<div
			class="pointer-events-none absolute inset-0"
			style="background-image: radial-gradient(circle, rgba(0,0,0,0.15) 1.5px, transparent 1.5px); background-size: 16px 16px;"
		></div>
		<!-- Fade overlay: white at top, transparent at bottom (earlier fade) -->
		<div
			class="pointer-events-none absolute inset-0"
			style="background: linear-gradient(to bottom, white 0%, white 40%, transparent 85%);"
		></div>

		<div class="relative px-6 pt-28 pb-24 md:px-10 md:pt-36 md:pb-32">
			<div class="mx-auto max-w-xl text-center">
				<!-- Headline -->
				<h1
					class="mb-8 text-3xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-4xl lg:text-6xl"
				>
					<span class="whitespace-nowrap">AI Search Intelligence</span><br />for Beauty Brands
				</h1>

				<!-- CTA buttons - sleek design -->
				<div class="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3">
					<a
						href="/join"
						class="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-200 hover:scale-[1.02] hover:bg-foreground/90"
					>
						Request Access
					</a>
					<a
						href="mailto:daniel.lee@tryrix.com"
						class="inline-flex h-11 items-center justify-center rounded-full border border-neutral-200 bg-white px-6 text-sm font-medium text-foreground transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50"
					>
						Talk to Us
					</a>
				</div>
			</div>
		</div>

		<!-- Bottom divider -->
		<div class="grid-divider"></div>
	</div>
</section>
