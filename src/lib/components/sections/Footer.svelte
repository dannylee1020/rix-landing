<script lang="ts">
	import { Mail } from '@lucide/svelte';
</script>

<footer class="border-t border-border bg-white">
	<div class="container mx-auto max-w-screen-xl px-6">
		<!-- Main Footer Content -->
		<div class="py-12">
			<div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
				<!-- Company Info -->
				<div>
					<div class="mb-2 flex items-center">
						<span class="text-lg font-bold tracking-tight text-foreground">Rix</span>
					</div>
					<p class="text-sm text-muted-foreground">AI search analytics for e-commerce brands.</p>
				</div>

				<!-- Contact -->
				<a
					href="mailto:founders@tryrix.com"
					class="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
					aria-label="Email us"
				>
					<Mail class="h-4 w-4" />
					<span>admin@tryrix.com</span>
				</a>
			</div>
		</div>

		<!-- Bottom Footer -->
		<div class="border-t border-border py-6">
			<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
				<div class="text-xs text-muted-foreground">© 2025 Rix. All rights reserved.</div>
				<div class="flex items-center gap-6 text-xs text-muted-foreground">
					<a href="/privacy" class="transition-colors duration-150 hover:text-foreground">Privacy</a
					>
					<a href="/terms" class="transition-colors duration-150 hover:text-foreground">Terms</a>
				</div>
			</div>
		</div>
	</div>
</footer>
