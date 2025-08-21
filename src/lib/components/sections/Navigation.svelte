<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<nav
	class="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"
>
	<div class="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
		<!-- Logo -->
		<div class="flex items-center space-x-2">
			<div class="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
				<span class="text-primary-foreground text-lg font-bold">R</span>
			</div>
			<span class="text-foreground text-xl font-bold">Rix</span>
		</div>

		<!-- Spacer for right alignment -->
		<div class="flex-1"></div>

		<!-- Talk to Us CTA -->
		<div class="flex items-center">
			<Button variant="default" size="sm" class="bg-black text-white hover:bg-gray-800"
				>Talk to Us</Button
			>
		</div>
	</div>
</nav>
