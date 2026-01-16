<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from '@lucide/svelte';
</script>

<section class="relative overflow-hidden bg-white py-32">
	<!-- Subtle radial glow -->
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(5,74,247,0.06)_0%,_rgba(5,74,247,0.02)_40%,_transparent_70%)]"
	></div>

	<div class="relative z-10 container mx-auto max-w-2xl px-6">
		<div class="text-center">
			<!-- Eyebrow -->
			<span
				class="mb-4 inline-block text-xs font-semibold tracking-widest text-[var(--brand)] uppercase"
			>
				Get Started
			</span>

			<h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
				Understand and own <br />
				AI search results
			</h2>

			<p class="mx-auto mb-10 max-w-md text-base leading-relaxed text-muted-foreground">
				Join brands already tracking their AI visibility across <br />
				leading AI search engines.
			</p>

			<a href="/join" class="inline-block">
				<Button
					size="lg"
					class="h-13 px-10 text-base font-medium shadow-sm transition-all duration-150 hover:shadow-md"
				>
					Request Access
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</a>
		</div>
	</div>
</section>
