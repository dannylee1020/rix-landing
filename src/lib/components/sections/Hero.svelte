<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from '@lucide/svelte';
</script>

<section class="relative bg-white pb-12 pt-32" style="margin-top: -32px;">
	<div class="container mx-auto max-w-screen-xl px-6">
		<div class="mx-auto max-w-4xl text-center">
			<h1
				class="text-foreground mb-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
			>
				AI search analytics <br />
				<span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
					>for e-commerce brands</span
				>
			</h1>

			<!-- Subheadline -->
			<p class="text-muted-foreground text-md mx-auto mb-8 max-w-2xl leading-relaxed md:text-xl">
				Billions of people are using AI search on a daily basis. <br />
				Track, analyze, and optimize the complete journey from AI search to sales.
			</p>

			<!-- Beta CTA -->
			<div class="mx-auto mb-16">
				<a href="/join">
					<Button size="lg" class="px-10 py-6 text-lg">
						Join Beta
						<ArrowRight class="ml-2 h-5 w-5" />
					</Button>
				</a>
			</div>
		</div>
	</div>
</section>
