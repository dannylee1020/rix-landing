<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Eye, MessageSquare, Package, Link, TrendingUp, DollarSign } from '@lucide/svelte';
</script>

<section class="bg-white py-24">
	<div class="container mx-auto max-w-6xl space-y-10 px-6">
		<!-- Section 1: Insights -->
		<div class="rounded-2xl border-2 border-gray-200 bg-white p-12">
			<div class="mb-8">
				<Badge variant="outline" class="mb-6 bg-white text-sm font-bold tracking-wide">
					Insights
				</Badge>
				<h2 class="mb-4 max-w-2xl text-4xl font-bold text-gray-900">
					Understand <br />
					your brand's AI presence
				</h2>
				<p class="text-md max-w-xl leading-relaxed text-gray-600">
					Monitor visibility, prompts, products, sources, and sentiment <br />
					across AI platforms in real-time.
				</p>
			</div>

			<!-- Dashboard Image -->
			<div class="mb-12 overflow-hidden rounded-xl border-2 border-gray-200">
				<img
					src="/visibility.png"
					alt="Insights Dashboard showing AI search visibility metrics across ChatGPT, Gemini, and Claude"
					class="h-auto w-full"
					width="1816"
					height="1246"
					loading="lazy"
				/>
			</div>

			<!-- Feature Cards -->
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<Eye class="mb-4 h-5 w-5 text-blue-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">Visibility & Rankings</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Track visibility score, share of voice, and position against competitors.
					</p>
				</div>

				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<MessageSquare class="mb-4 h-5 w-5 text-blue-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">Prompt Tracking</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						See which topics and queries trigger AI to mention your brand.
					</p>
				</div>

				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<Package class="mb-4 h-5 w-5 text-blue-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">Product Intelligence</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Track which products AI recommends and where it sends shoppers.
					</p>
				</div>

				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<Link class="mb-4 h-5 w-5 text-blue-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">Sources & Sentiment</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Discover what AI cites and how it describes your brand.
					</p>
				</div>
			</div>
		</div>
		<!-- Section 2: AI Traffic -->
		<div class="rounded-2xl border-2 border-gray-200 bg-white p-12">
			<div class="mb-8">
				<Badge variant="outline" class="mb-6 bg-white text-sm font-bold tracking-wide">
					AI Traffic Analysis
				</Badge>
				<h2 class="mb-4 max-w-2xl text-4xl font-bold text-gray-900">
					Connect <br />
					visibility to revenue
				</h2>
				<p class="text-md max-w-xl leading-relaxed text-gray-600">
					Track complete customer journeys from <br />
					AI search engines to your store to sales.
				</p>
			</div>

			<!-- Dashboard Image -->
			<div class="mb-12 overflow-hidden rounded-xl border-2 border-gray-200">
				<img
					src="/traffic.png"
					alt="AI Traffic Analysis Dashboard tracking customer journeys from AI search to conversions"
					class="h-auto w-full"
					width="1819"
					height="1226"
					loading="lazy"
				/>
			</div>

			<!-- Feature Cards -->
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<Eye class="mb-4 h-5 w-5 text-purple-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">AI Platform Referral Tracking</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Monitor user journeys from ChatGPT, Perplexity, and other AI platforms.
					</p>
				</div>

				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<Package class="mb-4 h-5 w-5 text-purple-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">Platform Integration</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Seamlessly integrate with Shopify and major <br /> e-commerce platforms.
					</p>
				</div>

				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<TrendingUp class="mb-4 h-5 w-5 text-purple-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">Conversion Mapping</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Connect AI mentions to actual conversions and revenue through GA4.
					</p>
				</div>

				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<DollarSign class="mb-4 h-5 w-5 text-purple-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">ROI Attribution</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Prove business impact and track revenue attributed to AI platforms.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
