<script lang="ts">
	import { Mail } from '@lucide/svelte';
</script>

<footer class="border-border border-t bg-white">
	<div class="container mx-auto max-w-screen-xl px-6">
		<!-- Main Footer Content -->
		<div class="py-12">
			<div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
				<!-- Company Info -->
				<div>
					<div class="mb-2 flex items-center">
						<span class="text-foreground text-lg font-bold tracking-tight">Rix</span>
					</div>
					<p class="text-muted-foreground text-sm">AI search analytics for e-commerce brands.</p>
				</div>

				<!-- Contact -->
				<a
					href="mailto:founders@tryrix.com"
					class="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors duration-150"
					aria-label="Email us"
				>
					<Mail class="h-4 w-4" />
					<span>admin@tryrix.com</span>
				</a>
			</div>
		</div>

		<!-- Bottom Footer -->
		<div class="border-border border-t py-6">
			<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
				<div class="text-muted-foreground text-xs">
					© 2025 Rix. All rights reserved.
					<span class="mx-1.5">·</span>
					<a href="https://logo.dev" class="hover:text-foreground transition-colors duration-150"
						>Logos by Logo.dev</a
					>
				</div>
				<div class="text-muted-foreground flex items-center gap-6 text-xs">
					<a href="/privacy" class="hover:text-foreground transition-colors duration-150">Privacy</a
					>
					<a href="/terms" class="hover:text-foreground transition-colors duration-150">Terms</a>
				</div>
			</div>
		</div>
	</div>
</footer>
