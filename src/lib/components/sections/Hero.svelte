<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from '@lucide/svelte';
</script>

<section class="relative overflow-hidden bg-white pt-32 pb-16" style="margin-top: -32px;">
	<!-- Subtle radial glow behind heading -->
	<div
		class="pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(5,74,247,0.08)_0%,_rgba(5,74,247,0.03)_50%,_transparent_70%)]"
	></div>

	<div class="relative z-10 container mx-auto max-w-screen-xl px-6">
		<div class="mx-auto max-w-3xl text-center">
			<h1
				class="mb-6 text-4xl leading-[1.15] font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
			>
				AI search analytics
				<br />
				for <span class="text-[var(--brand)]">beauty brands</span>
			</h1>

			<p class="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
				See how AI recommends products, which brands dominate your category, and why consumers find
				your competitors instead of you.
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
