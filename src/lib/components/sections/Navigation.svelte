<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<nav
	class="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"
>
	<div class="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
		<!-- Logo -->
		<a href="/" class="flex items-center space-x-2">
			<span class="text-foreground text-xl font-bold">Rix</span>
		</a>

		<!-- Spacer for right alignment -->
		<div class="flex-1"></div>

		<!-- Talk to Us CTA -->
		<div class="flex items-center">
			<a href="mailto:founders@tryrix.com">
				<Button variant="default" size="sm" class="bg-black text-white hover:bg-gray-800"
					>Talk to Us</Button
				>
			</a>
		</div>
	</div>
</nav>
