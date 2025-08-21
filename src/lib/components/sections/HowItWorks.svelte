<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { Sparkles, LineChart, Users, Zap } from '@lucide/svelte';
</script>

<section id="value-prop" class="bg-muted/20 py-16">
	<div class="container mx-auto max-w-screen-xl px-4">
		<!-- Section Header -->
		<div class="mb-12 text-center">
			<h2 class="text-foreground mb-4 text-2xl font-bold md:text-3xl">
				Optimize your brand for AI
				<p class="text-muted-foreground text-md mx-auto mt-3 max-w-xl text-base">
					Turn AI search intelligence into your competitive advantage
				</p>
			</h2>
		</div>

		<!-- Features -->
		<div class="mx-auto max-w-5xl">
			<div class="grid gap-8 md:grid-cols-2">
				<!-- Trend Analysis -->
				<Card class="border-border p-6 transition-shadow hover:shadow-lg">
					<div class="text-left">
						<!-- Icon -->
						<div class="mb-4">
							<div class="flex h-16 w-16 items-center justify-center rounded-xl bg-green-500/10">
								<LineChart class="h-8 w-8 text-green-600" />
							</div>
						</div>

						<!-- Content -->
						<h3 class="text-foreground mb-2 text-lg font-semibold">Trend Observability</h3>
						<p class="text-muted-foreground text-sm leading-relaxed">
							Monitor AI recommendation shifts and spot emerging trends.
						</p>
					</div>
				</Card>
				<!-- Keyword Intelligence -->
				<Card class="border-border p-6 transition-shadow hover:shadow-lg">
					<div class="text-left">
						<!-- Icon -->
						<div class="mb-4">
							<div class="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-xl">
								<Sparkles class="text-primary h-8 w-8" />
							</div>
						</div>

						<!-- Content -->
						<h3 class="text-foreground mb-2 text-lg font-semibold">Keyword Intelligence</h3>
						<p class="text-muted-foreground text-sm leading-relaxed">
							Track high-converting keywords and discover untapped search terms.
						</p>
					</div>
				</Card>

				<!-- Competitive Analysis -->
				<Card class="border-border p-6 transition-shadow hover:shadow-lg">
					<div class="text-left">
						<!-- Icon -->
						<div class="mb-4">
							<div class="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/10">
								<Users class="h-8 w-8 text-blue-600" />
							</div>
						</div>

						<!-- Content -->
						<h3 class="text-foreground mb-2 text-lg font-semibold">Competitive Analysis</h3>
						<p class="text-muted-foreground text-sm leading-relaxed">
							Compare visibility against competitors and find opportunities to outrank.
						</p>
					</div>
				</Card>

				<!-- Source Analysis -->
				<Card class="border-border p-6 transition-shadow hover:shadow-lg">
					<div class="text-left">
						<!-- Icon -->
						<div class="mb-4">
							<div class="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-500/10">
								<Zap class="h-8 w-8 text-orange-600" />
							</div>
						</div>

						<!-- Content -->
						<h3 class="text-foreground mb-2 text-lg font-semibold">Source Mapping</h3>
						<p class="text-muted-foreground text-sm leading-relaxed">
							Discover where LLMs source your brand data. Identify content gaps and boost your
							visibility
						</p>
					</div>
				</Card>
			</div>
		</div>
	</div>
</section>
