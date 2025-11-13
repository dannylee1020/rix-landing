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
	class="sticky top-0 z-50 w-full border-b border-transparent backdrop-blur-md"
	style="background: transparent;"
>
	<div class="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
		<!-- Logo -->
		<a href="/" class="flex items-center space-x-2">
			<span class="text-foreground text-2xl font-bold">Rix</span>
		</a>

		<!-- Rounded Navigation Menu -->
		<div class="hidden flex-1 items-center justify-center md:flex">
			<div
				class="flex items-center space-x-1 rounded-full border border-gray-200 bg-white/80 px-1.5 py-1.5 shadow-sm backdrop-blur-sm"
			>
				<a
					href="/"
					class="rounded-full px-5 py-2 text-sm font-medium transition-all {isActive('/')
						? 'bg-gray-100 text-gray-900'
						: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}"
				>
					Home
				</a>
				<a
					href="https://docs.tryrix.com"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full px-5 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900"
				>
					Changelog
				</a>
			</div>
		</div>

		<!-- Talk to Us CTA -->
		<div class="flex items-center">
			<a href="mailto:founders@tryrix.com">
				<Button variant="default" size="lg">Talk to Us</Button>
			</a>
		</div>
	</div>
</nav>
