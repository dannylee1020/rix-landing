<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Card } from '$lib/components/ui/card';
	import { ArrowRight, Eye, Search, BarChart3, TrendingUp } from '@lucide/svelte';
</script>

<section class="from-background to-muted/20 relative bg-gradient-to-b py-20 md:py-32">
	<div class="container mx-auto max-w-screen-xl px-4">
		<div class="mx-auto max-w-3xl text-center">
			<!-- Main Headline -->
			<h1 class="text-foreground mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
				AI Search Intelligence
				<br />
				<span class="text-primary">for E-Commerce</span>
			</h1>

			<!-- Subheadline -->
			<p class="text-muted-foreground md:text-md text-md mx-auto mb-8 max-w-2xl">
				Monitor, analyze, and optimize your product's visibility on ChatGPT.
			</p>

			<!-- Beta CTA -->
			<div class="mx-auto mb-12 max-w-md">
				<div class="flex flex-col gap-3 sm:flex-row">
					<Input type="email" placeholder="Enter your email" class="h-12 flex-1 px-4 text-base" />
					<Button size="lg" class="h-12 whitespace-nowrap px-8">
						Join Beta
						<ArrowRight class="ml-2 h-5 w-5" />
					</Button>
				</div>
			</div>
		</div>

		<!-- Feature Cards -->
		<div class="mx-auto mb-12 max-w-4xl">
			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<!-- Track Visibility -->
				<Card class="border-border p-4 text-center transition-shadow hover:shadow-md">
					<div
						class="bg-primary/10 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
					>
						<Eye class="text-primary h-5 w-5" />
					</div>
					<h3 class="text-foreground text-md mb-2 font-semibold">Track Visibility</h3>
					<p class="text-muted-foreground text-xs">Monitor when shoppers find your products</p>
				</Card>

				<!-- Uncover Sources -->
				<Card class="border-border p-4 text-center transition-shadow hover:shadow-md">
					<div
						class="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10"
					>
						<Search class="h-5 w-5 text-green-600" />
					</div>
					<h3 class="text-foreground text-md mb-2 font-semibold">Uncover Sources</h3>
					<p class="text-muted-foreground text-xs">Discover what's driving performance</p>
				</Card>

				<!-- Analyze Keywords -->
				<Card class="border-border p-4 text-center transition-shadow hover:shadow-md">
					<div
						class="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10"
					>
						<BarChart3 class="h-5 w-5 text-blue-600" />
					</div>
					<h3 class="text-foreground text-md mb-2 font-semibold">Analyze Keywords</h3>
					<p class="text-muted-foreground text-xs">Understand what shoppers ask</p>
				</Card>

				<!-- Optimize -->
				<Card class="border-border p-4 text-center transition-shadow hover:shadow-md">
					<div
						class="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10"
					>
						<TrendingUp class="h-5 w-5 text-orange-600" />
					</div>
					<h3 class="text-foreground text-md mb-2 font-semibold">Optimize Reach</h3>
					<p class="text-muted-foreground text-xs">Improve your product rankings</p>
				</Card>
			</div>
		</div>
		<!-- Dashboard Preview -->
		<div class="mx-auto mt-16 max-w-5xl">
			<div class="relative">
				<div class="border-border/50 aspect-[3/2] overflow-hidden rounded-2xl border-2 shadow-2xl">
					<img
						src="/dashboard-preview.png"
						alt="Rix Dashboard Preview"
						class="h-full w-full object-contain"
					/>
				</div>
				<!-- Floating elements for visual interest -->
				<div class="bg-primary/20 absolute -right-4 -top-4 h-8 w-8 rounded-full blur-sm"></div>
				<div
					class="bg-secondary/20 absolute -bottom-4 -left-4 h-12 w-12 rounded-full blur-sm"
				></div>
			</div>
		</div>
	</div>
</section>
