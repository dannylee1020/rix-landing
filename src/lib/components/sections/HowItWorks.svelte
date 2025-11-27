<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import {
		CircleCheck,
		TrendingUp,
		FileText,
		Target,
		Users,
		Search,
		ChartPie,
		DollarSign,
		ChartBar,
		Activity,
		Eye,
		Package
	} from '@lucide/svelte';
</script>

<section class="bg-white py-24">
	<div class="container mx-auto max-w-6xl space-y-10 px-6">
		<!-- Section 1: Brand Intelligence -->
		<div class="rounded-2xl border-2 border-gray-200 bg-white p-12">
			<div class="mb-8">
				<Badge variant="outline" class="mb-6 bg-white text-sm font-bold tracking-wide">
					Brand Intelligence
				</Badge>
				<h2 class="mb-4 max-w-2xl text-4xl font-bold text-gray-900">
					Understand <br />
					your brand's AI presence
				</h2>
				<p class="text-md max-w-xl leading-relaxed text-gray-600">
					Monitor accuracy, sentiment, and content sourcing <br />
					across AI platforms in real-time.
				</p>
			</div>

			<!-- Dashboard Image -->
			<div class="mb-12 overflow-hidden rounded-xl border-2 border-gray-200">
				<img
					src="/brand_intel.png"
					alt="Brand Intelligence Dashboard showing AI search visibility metrics across ChatGPT, Gemini, and Claude"
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
					<CircleCheck class="mb-4 h-5 w-5 text-blue-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">Factual Accuracy Scoring</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Verify AI is providing correct information about your brand and products.
					</p>
				</div>

				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<TrendingUp class="mb-4 h-5 w-5 text-blue-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">Sentiment Analysis</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Track how AI describes your products—positive, neutral, or negative.
					</p>
				</div>

				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<FileText class="mb-4 h-5 w-5 text-blue-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">Content Sourcing Insights</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						See which pages and products AI platforms crawl and reference.
					</p>
				</div>

				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<Package class="mb-4 h-5 w-5 text-blue-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">SKU-Level Attribution</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Track which specific products AI mentions or recommends.
					</p>
				</div>
			</div>
		</div>
		<!-- Section 3: AI Traffic Analysis -->
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

		<!-- Section 3: Market & Competition -->
		<div class="rounded-2xl border-2 border-gray-200 bg-white p-12">
			<div class="mb-8">
				<Badge variant="outline" class="mb-6 bg-white text-sm font-bold tracking-wide">
					Market & Competition
				</Badge>
				<h2 class="mb-4 max-w-2xl text-4xl font-bold text-gray-900">
					Understand <br />
					your market in AI search
				</h2>
				<p class="text-md max-w-xl leading-relaxed text-gray-600">
					See who AI recommends instead of you.<br />
					Understand why. Win them back.
				</p>
			</div>

			<!-- Dashboard Image -->
			<div class="mb-12 overflow-hidden rounded-xl border-2 border-gray-200">
				<img
					src="/market_intel.png"
					alt="Market and Competition Dashboard showing competitor analysis in AI search results"
					class="h-auto w-full"
					width="1820"
					height="1213"
					loading="lazy"
				/>
			</div>

			<!-- Feature Cards -->
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<Users class="mb-4 h-5 w-5 text-green-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">Competitor Product Tracking</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						See which competitor products AI recommends for queries like yours.
					</p>
				</div>

				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<Search class="mb-4 h-5 w-5 text-green-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">Keyword Trigger Analysis</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Discover what queries cause AI to recommend competitors over you.
					</p>
				</div>

				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<Target class="mb-4 h-5 w-5 text-green-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">Market Share Opportunities</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Find gaps where competitors are winning AI recommendations.
					</p>
				</div>

				<div
					class="rounded-xl border-2 border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<Activity class="mb-4 h-5 w-5 text-green-600" />
					<h3 class="mb-2 text-base font-bold text-gray-900">Displacement Strategies</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Get actionable insights to displace competitors in AI recommendations.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
