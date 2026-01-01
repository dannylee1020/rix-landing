<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from '@lucide/svelte';
</script>

<section class="relative overflow-hidden bg-white pb-16 pt-32" style="margin-top: -32px;">
	<!-- Subtle radial glow behind heading -->
	<div
		class="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] bg-[radial-gradient(ellipse_at_center,_rgba(5,74,247,0.08)_0%,_rgba(5,74,247,0.03)_50%,_transparent_70%)]"
	></div>

	<div class="relative z-10 container mx-auto max-w-screen-xl px-6">
		<div class="mx-auto max-w-3xl text-center">
			<h1
				class="text-foreground mb-6 text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl"
			>
				AI search analytics
				<br />
				<span class="text-[var(--brand)]">for e-commerce brands</span>
			</h1>

			<p class="text-muted-foreground mx-auto mb-10 max-w-xl text-base leading-relaxed md:text-lg">
				Billions of people use AI search daily. Track, analyze, and optimize the complete journey from AI search to sales.
			</p>

			<a href="/join" class="inline-block">
				<Button size="lg" class="h-12 px-8 text-base font-medium transition-colors duration-150">
					Request Access
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</a>
		</div>
	</div>
</section>
