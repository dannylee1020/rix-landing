<script lang="ts">
	import { Mail } from '@lucide/svelte';
</script>

<footer class="border-t bg-white">
	<div class="container mx-auto max-w-screen-xl px-4">
		<!-- Main Footer Content -->
		<div class="py-20">
			<div class="grid gap-8 md:grid-cols-2">
				<!-- Company Info -->
				<div>
					<div class="mb-4 flex items-center space-x-2">
						<span class="text-foreground text-xl font-bold">Rix</span>
					</div>
					<p class="text-muted-foreground mb-6 max-w-sm leading-relaxed">
						AI search analytics built for e-commerce brands.
					</p>
					<div class="flex space-x-4">
						<a
							href="mailto:founders@tryrix.com"
							class="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="Email us"
						>
							<Mail class="h-5 w-5" />
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom Footer -->
		<div class="border-border border-t py-8">
			<div class="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
				<div class="text-muted-foreground text-sm">© 2025 Rix. All rights reserved.</div>
				<div class="text-muted-foreground flex items-center space-x-6 text-sm">
					<a href="/privacy" class="hover:text-foreground transition-colors"> Privacy Policy </a>
					<a href="/terms" class="hover:text-foreground transition-colors"> Terms of Service </a>
				</div>
			</div>
		</div>
	</div>
</footer>
