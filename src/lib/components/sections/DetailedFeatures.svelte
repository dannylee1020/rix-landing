<script lang="ts">
	const brandFeatures = [
		{
			title: 'Brand Visibility',
			description: 'Track how often your brand appears in AI search results.'
		},
		{
			title: 'Competitive Benchmarking',
			description: 'Compare your performance against competitors on product level.'
		},
		{
			title: 'Product Recommendation',
			description: 'Track which products get recommended and where.'
		},
		{
			title: 'Source Analysis',
			description: 'See which sources AI cites when discussing your brand.'
		}
	];

	const perfFeatures = [
		{
			title: 'Revenue Attribution',
			description: 'Connect AI-driven traffic directly to sales revenue with advanced ROI tracking.'
		},
		{
			title: 'Product Monitoring',
			description: 'See top products sold through AI search engine recommendation.'
		},
		{
			title: 'Conversion Funnel',
			description:
				'Follow the complete customer journey from AI referral to purchase with full-funnel attribution.'
		},
		{
			title: 'Session Analytics',
			description:
				'Track visitor behavior from AI platform referrals including page views, time on site, and engagement metrics.'
		}
	];
</script>

<section class="bg-white pb-24 pt-10">
	<div class="container mx-auto max-w-5xl space-y-24 px-6">
		<!-- SECTION 1: AI INSIGHTS -->
		<div class="space-y-10">
			<div class="mb-8 text-center">
				<span class="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--brand)]">
					AI Insights
				</span>
				<h3 class="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
					Understand and improve your AI presence
				</h3>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<!-- Brand Visibility -->
				<div class="feature-card">
					<div class="visual-area">
						<svg viewBox="0 0 200 150" class="profound-svg">
							<path
								d="M10 120 C 30 120, 40 40, 70 40 S 110 90, 140 90 S 170 20, 190 20"
								class="stroke-brand"
								stroke-width="1.5"
								fill="none"
							/>
							<path
								d="M10 120 C 30 120, 40 40, 70 40 S 110 90, 140 90 S 170 20, 190 20 L 190 140 L 10 140 Z"
								class="fill-brand-dim"
								stroke="none"
							/>
							<circle cx="190" cy="20" r="4" class="fill-light stroke-brand" />
							<text
								x="185"
								y="15"
								text-anchor="end"
								class="svg-text text-brand"
								style="font-weight: 700; font-size: 12px;">72%</text
							>
							<line x1="10" y1="140" x2="190" y2="140" class="dim-stroke" />
						</svg>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-base font-medium text-foreground">{brandFeatures[0].title}</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">{brandFeatures[0].description}</p>
					</div>
				</div>

				<!-- Competitive Benchmarking -->
				<div class="feature-card">
					<div class="visual-area">
						<svg viewBox="0 0 200 150" class="profound-svg">
							<path d="M100 10 L 100 140" class="dim-stroke" stroke-dasharray="2 2" />
							<path d="M35 75 L 165 75" class="dim-stroke" stroke-dasharray="2 2" />
							<polygon
								points="100 10, 165 75, 100 140, 35 75"
								class="dim-stroke"
								stroke-width="0.5"
								stroke-opacity="0.5"
								fill="none"
							/>
							<polygon points="100 40, 130 75, 100 120, 50 75" class="dim-stroke" fill="none" />
							<polygon
								points="100 20, 155 75, 100 110, 45 75"
								class="stroke-brand fill-brand-dim"
								stroke-width="1.5"
							/>
							<circle cx="100" cy="20" r="2" class="fill-brand-solid" stroke="none" />
							<circle cx="155" cy="75" r="2" class="fill-brand-solid" stroke="none" />
							<circle cx="100" cy="110" r="2" class="fill-brand-solid" stroke="none" />
							<circle cx="45" cy="75" r="2" class="fill-brand-solid" stroke="none" />
						</svg>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-base font-medium text-foreground">{brandFeatures[1].title}</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">{brandFeatures[1].description}</p>
					</div>
				</div>

				<!-- Product Recommendation -->
				<div class="feature-card">
					<div class="visual-area">
						<svg viewBox="0 0 200 150" class="profound-svg">
							<rect
								x="20"
								y="30"
								width="160"
								height="30"
								rx="3"
								class="fill-light stroke-brand"
							/>
							<text
								x="35"
								y="50"
								class="svg-text text-brand"
								style="font-weight: 700; font-size: 12px;">#1</text
							>
							<line
								x1="60"
								y1="45"
								x2="150"
								y2="45"
								class="stroke-brand"
								stroke-opacity="0.5"
							/>
							<rect x="20" y="70" width="160" height="30" rx="3" class="fill-light dim-stroke" />
							<text x="35" y="90" class="svg-text svg-text-dim" style="font-size: 12px;">#2</text>
							<line x1="60" y1="85" x2="130" y2="85" class="dim-stroke" />
							<rect x="20" y="110" width="160" height="30" rx="3" class="fill-light dim-stroke" />
							<text x="35" y="130" class="svg-text svg-text-dim" style="font-size: 12px;">#3</text>
							<line x1="60" y1="125" x2="120" y2="125" class="dim-stroke" />
							<path
								d="M190 45 L 192 42 L 194 45 L 197 46 L 194 47 L 192 50 L 190 47 L 187 46 Z"
								class="fill-brand-solid"
								stroke="none"
							/>
						</svg>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-base font-medium text-foreground">{brandFeatures[2].title}</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">{brandFeatures[2].description}</p>
					</div>
				</div>

				<!-- Source Analysis -->
				<div class="feature-card">
					<div class="visual-area">
						<svg viewBox="0 0 200 150" class="profound-svg">
							<g transform="translate(30, 25)">
								<rect y="0" width="22" height="18" rx="2" class="dim-stroke fill-light" />
								<line
									x1="4"
									y1="6"
									x2="18"
									y2="6"
									class="dim-stroke"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<line
									x1="4"
									y1="10"
									x2="12"
									y2="10"
									class="dim-stroke"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<rect
									y="35"
									width="22"
									height="28"
									rx="2"
									class="stroke-brand fill-light"
									stroke-width="1.5"
								/>
								<line
									x1="4"
									y1="45"
									x2="18"
									y2="45"
									class="stroke-brand"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<line
									x1="4"
									y1="50"
									x2="18"
									y2="50"
									class="stroke-brand"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<line
									x1="4"
									y1="55"
									x2="14"
									y2="55"
									class="stroke-brand"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<rect y="80" width="22" height="18" rx="2" class="dim-stroke fill-light" />
								<line
									x1="4"
									y1="86"
									x2="18"
									y2="86"
									class="dim-stroke"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<line
									x1="4"
									y1="90"
									x2="12"
									y2="90"
									class="dim-stroke"
									stroke-width="1"
									stroke-linecap="round"
								/>
							</g>
							<circle cx="170" cy="75" r="8" class="fill-brand-solid stroke-brand" />
							<path
								d="M 52 34 C 90 34, 120 75, 162 75"
								class="dim-stroke"
								fill="none"
								stroke-width="0.8"
							/>
							<path
								d="M 52 114 C 90 114, 120 75, 162 75"
								class="dim-stroke"
								fill="none"
								stroke-width="0.8"
							/>
							<path
								d="M 52 75 C 90 75, 120 75, 162 75"
								class="stroke-brand"
								stroke-width="1.5"
								fill="none"
							/>
							<g transform="translate(100, 58)">
								<rect width="20" height="16" rx="3" class="fill-light stroke-brand" stroke-width="1.2" />
								<line
									x1="6"
									y1="6"
									x2="14"
									y2="6"
									class="stroke-brand"
									stroke-width="1.2"
									stroke-linecap="round"
								/>
								<line
									x1="6"
									y1="10"
									x2="10"
									y2="10"
									class="stroke-brand"
									stroke-width="1.2"
									stroke-linecap="round"
								/>
								<path d="M 10 16 L 12 19 L 14 16" class="fill-light stroke-brand" stroke-width="0" />
								<path
									d="M 10 16 L 12 19 L 14 16"
									class="stroke-brand"
									stroke-width="1.2"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<line x1="10.5" y1="16" x2="13.5" y2="16" stroke="#ffffff" stroke-width="2" />
							</g>
						</svg>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-base font-medium text-foreground">{brandFeatures[3].title}</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">{brandFeatures[3].description}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- SECTION 2: TRAFFIC ANALYSIS -->
		<div class="space-y-10">
			<div class="mb-8 text-center">
				<span class="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#8b5cf6]">
					Traffic Analysis
				</span>
				<h3 class="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
					See how AI search drives traffic and sales
				</h3>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<!-- Revenue Attribution -->
				<div class="feature-card">
					<div class="visual-area">
						<svg viewBox="0 0 200 150" class="profound-svg">
							<line x1="10" y1="140" x2="190" y2="140" class="dim-stroke" />
							<line x1="10" y1="10" x2="10" y2="140" class="dim-stroke" />
							<path
								d="M10 130 C 50 130, 100 110, 170 90"
								class="dim-stroke"
								stroke-dasharray="2 2"
								fill="none"
							/>
							<circle cx="170" cy="90" r="2" class="fill-light dim-stroke" />
							<text x="170" y="80" text-anchor="middle" class="svg-text svg-text-dim">$1.2k</text>
							<path
								d="M10 130 C 50 120, 80 80, 180 30"
								class="stroke-perf"
								stroke-width="2"
								fill="none"
							/>
							<circle cx="180" cy="30" r="3" class="fill-light stroke-perf" />
							<text
								x="180"
								y="20"
								text-anchor="middle"
								class="svg-text text-perf"
								style="font-weight:bold;">$4.2k</text
							>
						</svg>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-base font-medium text-foreground">{perfFeatures[0].title}</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">{perfFeatures[0].description}</p>
					</div>
				</div>

				<!-- Product Monitoring -->
				<div class="feature-card">
					<div class="visual-area">
						<svg viewBox="0 0 200 150" class="profound-svg">
							<rect x="20" y="30" width="160" height="25" rx="2" class="fill-light stroke-perf" />
							<line x1="40" y1="42" x2="140" y2="42" class="stroke-perf" stroke-opacity="0.3" />
							<circle cx="165" cy="42" r="3" class="stroke-perf fill-light" />
							<rect x="20" y="65" width="160" height="25" rx="2" class="fill-light dim-stroke" />
							<line x1="40" y1="77" x2="130" y2="77" class="dim-stroke" />
							<rect x="20" y="100" width="160" height="25" rx="2" class="fill-light dim-stroke" />
							<line x1="40" y1="112" x2="120" y2="112" class="dim-stroke" />
							<path d="M10 30 L10 130" class="dim-stroke" stroke-dasharray="2 2" />
						</svg>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-base font-medium text-foreground">{perfFeatures[1].title}</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">{perfFeatures[1].description}</p>
					</div>
				</div>

				<!-- Conversion Funnel -->
				<div class="feature-card">
					<div class="visual-area">
						<svg viewBox="0 0 200 150" class="profound-svg">
							<path d="M20 20 H180 L160 55 H40 Z" class="dim-stroke" fill="none" />
							<path d="M45 60 H155 L135 95 H65 Z" class="dim-stroke" fill="none" />
							<path d="M70 100 H130 L115 135 H85 Z" class="stroke-perf" stroke-width="1.5" fill="none" />
							<line x1="100" y1="135" x2="100" y2="145" class="stroke-perf" />
							<path d="M97 142 L100 145 L103 142" class="stroke-perf" fill="none" />
						</svg>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-base font-medium text-foreground">{perfFeatures[2].title}</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">{perfFeatures[2].description}</p>
					</div>
				</div>

				<!-- Session Analytics -->
				<div class="feature-card">
					<div class="visual-area">
						<svg viewBox="0 0 200 150" class="profound-svg">
							<line x1="10" y1="130" x2="190" y2="130" class="dim-stroke" />
							<rect x="30" y="90" width="20" height="40" rx="1" class="dim-stroke fill-light" />
							<rect x="60" y="70" width="20" height="60" rx="1" class="dim-stroke fill-light" />
							<rect x="90" y="85" width="20" height="45" rx="1" class="dim-stroke fill-light" />
							<rect x="120" y="45" width="20" height="85" rx="1" class="dim-stroke fill-light" />
							<rect x="150" y="60" width="20" height="70" rx="1" class="dim-stroke fill-light" />
							<rect x="180" y="25" width="20" height="105" rx="1" class="stroke-perf fill-light" />
							<text
								x="190"
								y="15"
								text-anchor="middle"
								class="svg-text"
								style="font-weight:bold;">2.4k</text
							>
						</svg>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-base font-medium text-foreground">{perfFeatures[3].title}</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">{perfFeatures[3].description}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.feature-card {
		background-color: #ffffff;
		border: 1px solid var(--border, #e5e5e5);
		transition: border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: 12px;
	}
	.feature-card:hover {
		border-color: #d1d5db;
	}

	.visual-area {
		width: 100%;
		height: 220px;
		background: #fafafa;
		border-bottom: 1px solid var(--border, #e5e5e5);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.profound-svg {
		stroke: #171717;
		stroke-width: 1.2;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
		width: 100%;
		height: 100%;
		padding: 35px;
	}

	.dim-stroke {
		stroke: #e5e5e5;
	}
	.fill-light {
		fill: #ffffff;
	}

	/* Brand Intelligence Colors (Vibrant Blue) */
	.stroke-brand {
		stroke: var(--brand, #054af7);
	}
	.fill-brand-dim {
		fill: rgba(5, 74, 247, 0.04);
	}
	.fill-brand-solid {
		fill: var(--brand, #054af7);
	}
	.text-brand {
		fill: var(--brand, #054af7);
	}

	/* Traffic Analysis Colors (Violet) */
	.stroke-perf {
		stroke: #8b5cf6;
	}
	.text-perf {
		fill: #8b5cf6;
	}

	/* SVG Text Styles */
	.svg-text {
		font-family: var(--font-sans, 'Geist', sans-serif);
		font-size: 10px;
		font-weight: 500;
		fill: #0a0a0a;
		stroke: none;
	}
	.svg-text-dim {
		fill: #737373;
	}
</style>
