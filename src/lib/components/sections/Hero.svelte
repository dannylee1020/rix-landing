<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from '@lucide/svelte';
</script>

<section class="relative overflow-hidden bg-white pb-12 pt-32" style="margin-top: -32px;">
	<!-- Radial glow behind heading -->
	<div
		class="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-[radial-gradient(ellipse_at_center,_rgba(5,74,247,0.12)_0%,_rgba(5,74,247,0.06)_40%,_transparent_70%)]"
	></div>

	<div class="relative z-10 container mx-auto max-w-screen-xl px-6">
		<div class="mx-auto max-w-4xl text-center">
			<h1
				class="text-foreground mb-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
			>
				AI search analytics <br />
				<span class="text-[#054af7]">for e-commerce brands</span>
			</h1>

			<p class="text-muted-foreground text-md mx-auto mb-8 max-w-2xl leading-relaxed md:text-xl">
				Billions of people are using AI search on a daily basis. <br />
				Track, analyze, and optimize the complete journey from AI search to sales.
			</p>

			<div class="relative mx-auto mb-16 inline-flex justify-center">
				<!-- Rainbow prismatic glow behind button -->
				<div
					class="glow-animate absolute left-0 right-0 mx-auto top-[70%] h-4 w-24 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-50% to-emerald-400 opacity-80 blur-lg"
				></div>
				<a href="/join" class="relative">
					<Button size="lg" class="px-10 py-6 text-lg">
						Request Access
						<ArrowRight class="ml-2 h-5 w-5" />
					</Button>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.glow-animate {
		animation: glow-pulse 2s ease-in-out infinite;
	}

	@keyframes glow-pulse {
		0%, 100% {
			opacity: 0.6;
			transform: scale(1);
		}
		50% {
			opacity: 1;
			transform: scale(1.1);
		}
	}
</style>
