<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight, Mail } from '@lucide/svelte';
</script>

<footer class="relative bg-black text-white">
	<!-- Dot pattern overlay -->
	<div
		class="pointer-events-none absolute inset-0"
		style="background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px); background-size: 24px 24px;"
	></div>

	<div class="relative z-10 container mx-auto max-w-screen-xl px-6">
		<!-- Wrapper to constrain width to content -->
		<div class="mx-auto w-fit">
			<!-- Main Footer Section: Centered branding + CTA -->
			<div class="py-24">
				<div class="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-64">
					<!-- Rix Branding -->
					<div class="flex-shrink-0 text-center md:text-left">
						<span class="text-4xl font-bold tracking-tight md:text-5xl">Rix</span>
					</div>

					<!-- CTA -->
					<div class="text-center md:text-left">
						<h2 class="mb-4 text-2xl tracking-tight md:text-3xl">
							Understand and own AI search results
						</h2>

						<p class="mb-8 max-w-sm text-sm leading-relaxed text-white/60">
							Join brands already tracking their AI visibility across leading AI search engines.
						</p>

						<a href="/join" class="inline-block">
							<Button
								size="lg"
								class="h-13 border border-white bg-black px-10 text-base font-medium text-white transition-all duration-150 hover:bg-white/10"
							>
								Request Access
								<ArrowRight class="ml-2 h-4 w-4" />
							</Button>
						</a>
					</div>
				</div>
			</div>

			<!-- Divider -->
			<div class="border-t border-white/10"></div>

			<!-- Bottom Footer -->
			<div class="py-6">
				<div class="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
					<div class="flex-shrink-0 text-xs text-white/40">
						© 2026 Silence Inc. All rights reserved.
					</div>
					<div class="flex items-center gap-6 text-xs text-white/40">
						<div class="flex items-center gap-2">
							<Mail class="h-4 w-4" />
							<span>admin@tryrix.com</span>
						</div>
						<a href="/privacy" class="transition-colors duration-150 hover:text-white">Privacy</a>
						<a href="/terms" class="transition-colors duration-150 hover:text-white">Terms</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
