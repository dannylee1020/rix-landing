<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from '@lucide/svelte';
</script>

<section class="bg-gradient-to-b from-white from-10% to-[#f0f4ff] to-70% py-24">
	<div class="container mx-auto max-w-3xl px-6">
		<div class="text-center">
			<h2 class="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
				AI search is changing e-commerce
			</h2>
			<p class="mx-auto mb-8 max-w-lg text-base leading-relaxed text-muted-foreground">
				Reach billions of consumers already using AI search to discover brands and products.
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
