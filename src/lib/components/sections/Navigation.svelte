<script lang="ts">
	import { page } from '$app/state';

	const isActive = (path: string) => {
		if (path === '/' && page.url.pathname === '/') return true;
		if (path !== '/' && page.url.pathname.startsWith(path)) return true;
		return false;
	};

	let mobileMenuOpen = $state(false);
</script>

<nav
	class="sticky top-0 z-50 w-full border-b border-[var(--grid-line-strong)] bg-white/90 backdrop-blur-md"
	aria-label="Main navigation"
>
	<div class="mx-auto flex h-12 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16">
		<!-- Logo -->
		<a href="/" class="flex items-center">
			<span class="text-lg font-semibold tracking-tight text-foreground">Rix</span>
		</a>

		<!-- Navigation Menu (Desktop) -->
		<div class="hidden items-center gap-6 md:flex">
			<a
				href="/"
				class="text-sm font-medium transition-colors duration-150 {isActive('/')
					? 'text-foreground'
					: 'text-muted-foreground hover:text-foreground'}"
			>
				Home
			</a>
			<a
				href="https://docs.tryrix.com"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
			>
				Changelog
			</a>
		</div>

		<!-- CTA Button (Desktop) -->
		<div class="hidden items-center md:flex">
			<a
				href="mailto:daniel.lee@tryrix.com"
				class="inline-flex h-8 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background shadow-md transition-all duration-150 hover:bg-foreground/90"
			>
				Talk to Us
			</a>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground md:hidden"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-label="Toggle menu"
			aria-expanded={mobileMenuOpen}
		>
			{#if mobileMenuOpen}
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M18 6 6 18"/><path d="m6 6 12 12"/>
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
				</svg>
			{/if}
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-neutral-100 bg-white px-6 py-4 md:hidden">
			<div class="flex flex-col gap-3">
				<a
					href="/"
					class="text-sm font-medium transition-colors duration-150 {isActive('/')
						? 'text-foreground'
						: 'text-muted-foreground'}"
					onclick={() => (mobileMenuOpen = false)}
				>
					Home
				</a>
				<a
					href="https://docs.tryrix.com"
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm font-medium text-muted-foreground transition-colors duration-150"
					onclick={() => (mobileMenuOpen = false)}
				>
					Changelog
				</a>
				<div class="pt-2">
					<a
						href="mailto:daniel.lee@tryrix.com"
						class="inline-flex h-9 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background shadow-md"
						onclick={() => (mobileMenuOpen = false)}
					>
						Talk to Us
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>
