<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';

	$: isActive = (path: string) => {
		if (path === '/' && $page.url.pathname === '/') return true;
		if (path !== '/' && $page.url.pathname.startsWith(path)) return true;
		return false;
	};
</script>

<nav
	class="sticky top-0 z-50 w-full border-b border-border/50 bg-white/80 backdrop-blur-md"
	aria-label="Main navigation"
>
	<div class="container mx-auto flex h-14 max-w-screen-xl items-center justify-between px-6">
		<!-- Logo -->
		<a href="/" class="flex items-center">
			<span class="text-foreground text-xl font-bold tracking-tight">Rix</span>
		</a>

		<!-- Navigation Menu -->
		<div class="hidden flex-1 items-center justify-center md:flex">
			<div class="flex items-center gap-1">
				<a
					href="/"
					class="relative rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150 {isActive('/')
						? 'text-[var(--brand)]'
						: 'text-muted-foreground hover:text-foreground'}"
				>
					Home
				</a>
				<a
					href="https://docs.tryrix.com"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
				>
					Changelog
				</a>
			</div>
		</div>

		<!-- Talk to Us CTA -->
		<div class="flex items-center">
			<a href="mailto:founders@tryrix.com">
				<Button variant="default" size="sm" class="h-9 px-4 text-sm font-medium">Talk to Us</Button>
			</a>
		</div>
	</div>
</nav>
