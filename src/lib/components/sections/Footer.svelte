<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight, Mail } from '@lucide/svelte';
</script>

<footer class="relative w-full bg-black text-white">
	<!-- White dot grid background with fade from top to bottom -->
	<div
		class="pointer-events-none absolute inset-0"
		style="background-image: radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px); background-size: 16px 16px;"
	></div>
	<!-- Fade overlay: transparent at top, black at bottom -->
	<div
		class="pointer-events-none absolute inset-0"
		style="background: linear-gradient(to bottom, transparent 0%, black 70%);"
	></div>

	<!-- Main Footer Section -->
	<div class="relative px-6 py-24 md:px-16 lg:px-24">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
			<div class="flex flex-col justify-center">
				<span class="text-4xl font-semibold tracking-tight md:text-5xl">Rix</span>
				<p class="mt-3 text-sm text-white/50">AI Search Intelligence for Beauty Brands</p>
			</div>

			<div>
				<h2 class="mb-4 text-2xl font-medium tracking-tight md:text-3xl">
					Understand and own AI search results
				</h2>
				<p class="mb-8 max-w-sm text-sm leading-relaxed text-white/50">
					Join brands already tracking their AI visibility across leading AI search engines.
				</p>
				<a href="/join" class="inline-block">
					<Button
						size="lg"
						class="h-12 border border-white/20 bg-white/5 px-8 text-base font-medium text-white transition-all duration-150 hover:bg-white/10"
					>
						Request Access
						<ArrowRight class="ml-2 h-4 w-4" />
					</Button>
				</a>
			</div>
		</div>
	</div>

	<!-- Divider -->
	<div class="relative border-t border-white/15"></div>

	<!-- Bottom Footer -->
	<div class="relative px-6 py-6 md:px-16 lg:px-24">
		<div class="flex flex-col items-center gap-4 md:flex-row md:justify-between">
			<div class="text-xs text-white/40">
				&copy; 2026 Silence Inc. All rights reserved.
			</div>
			<div class="flex items-center gap-6 text-xs text-white/40">
				<div class="flex items-center gap-2">
					<Mail class="h-3.5 w-3.5" />
					<span>admin@tryrix.com</span>
				</div>
				<a href="/privacy" class="transition-colors duration-150 hover:text-white">Privacy</a>
				<a href="/terms" class="transition-colors duration-150 hover:text-white">Terms</a>
			</div>
		</div>
	</div>
</footer>
