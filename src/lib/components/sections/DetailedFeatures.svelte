<script lang="ts">
	const competitiveFeatures = [
		{
			title: 'Share of Voice',
			description:
				'How often AI recommends you vs. competitors for queries like "best retinol serum" or "hydrating toner for sensitive skin."'
		},
		{
			title: 'Gap Analysis',
			description:
				"Topics where competitors get recommended and you don't. Find out why COSRX shows up for snail mucin and you don't."
		},
		{
			title: 'Opportunity Mapping',
			description: 'Queries with no dominant brand—categories you can own before competitors do.'
		},
		{
			title: 'Source Intelligence',
			description:
				"Which publications AI cites when recommending products. Allure, Byrdie, Vogue—see who's driving AI's picks and where you're missing."
		}
	];

	const visibilityFeatures = [
		{
			title: 'Brand Monitoring',
			description:
				'Track how ChatGPT, Perplexity, and Google AI describe your brand and products. See the actual responses consumers get.'
		},
		{
			title: 'Sentiment & Positioning',
			description:
				'Is AI calling you "affordable" when you\'re positioning as premium? Know how AI frames you versus how you want to be framed.'
		},
		{
			title: 'Product Recommendations',
			description:
				'Which of your SKUs get recommended, for which queries, and how often. Spot your heroes and your blind spots.'
		},
		{
			title: 'Trend Detection',
			description:
				'See emerging queries and topics gaining traction. Know what consumers will be asking about before your competitors do.'
		}
	];
</script>

<section class="bg-white pt-10 pb-24">
	<div class="container mx-auto max-w-5xl space-y-24 px-6">
		<!-- SECTION A: COMPETITIVE INTELLIGENCE -->
		<div class="space-y-10">
			<div class="mb-8 text-center">
				<span
					class="mb-3 inline-block text-xs font-semibold tracking-widest text-[var(--brand)] uppercase"
				>
					Competitive Intelligence
				</span>
				<h3 class="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
					Know where you win and where you lose
				</h3>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<!-- Share of Voice -->
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
						<h3 class="mb-2 text-base font-medium text-foreground">
							{competitiveFeatures[0].title}
						</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">
							{competitiveFeatures[0].description}
						</p>
					</div>
				</div>

				<!-- Gap Analysis -->
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
						<h3 class="mb-2 text-base font-medium text-foreground">
							{competitiveFeatures[1].title}
						</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">
							{competitiveFeatures[1].description}
						</p>
					</div>
				</div>

				<!-- Opportunity Mapping -->
				<div class="feature-card">
					<div class="visual-area">
						<svg viewBox="0 0 200 150" class="profound-svg">
							<rect x="20" y="30" width="160" height="30" rx="3" class="fill-light stroke-brand" />
							<text
								x="35"
								y="50"
								class="svg-text text-brand"
								style="font-weight: 700; font-size: 12px;">#1</text
							>
							<line x1="60" y1="45" x2="150" y2="45" class="stroke-brand" stroke-opacity="0.5" />
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
						<h3 class="mb-2 text-base font-medium text-foreground">
							{competitiveFeatures[2].title}
						</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">
							{competitiveFeatures[2].description}
						</p>
					</div>
				</div>

				<!-- Source Intelligence -->
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
								<rect
									width="20"
									height="16"
									rx="3"
									class="fill-light stroke-brand"
									stroke-width="1.2"
								/>
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
								<path
									d="M 10 16 L 12 19 L 14 16"
									class="fill-light stroke-brand"
									stroke-width="0"
								/>
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
						<h3 class="mb-2 text-base font-medium text-foreground">
							{competitiveFeatures[3].title}
						</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">
							{competitiveFeatures[3].description}
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- SECTION B: AI VISIBILITY -->
		<div class="space-y-10">
			<div class="mb-8 text-center">
				<span
					class="mb-3 inline-block text-xs font-semibold tracking-widest text-[#8b5cf6] uppercase"
				>
					AI Visibility
				</span>
				<h3 class="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
					Understand how AI sees your brand
				</h3>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<!-- Brand Monitoring -->
				<div class="feature-card">
					<div class="visual-area">
						<svg viewBox="0 0 200 150" class="profound-svg">
							<!-- AI Response Card 1 (background) -->
							<g transform="translate(25, 20)">
								<rect width="65" height="50" rx="4" class="dim-stroke fill-light" />
								<line
									x1="8"
									y1="12"
									x2="57"
									y2="12"
									class="dim-stroke"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<line
									x1="8"
									y1="20"
									x2="50"
									y2="20"
									class="dim-stroke"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<line
									x1="8"
									y1="28"
									x2="40"
									y2="28"
									class="dim-stroke"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<rect
									x="8"
									y="36"
									width="24"
									height="6"
									rx="2"
									class="dim-stroke fill-light"
									stroke-width="0.8"
								/>
							</g>
							<!-- AI Response Card 2 (background) -->
							<g transform="translate(110, 80)">
								<rect width="65" height="50" rx="4" class="dim-stroke fill-light" />
								<line
									x1="8"
									y1="12"
									x2="57"
									y2="12"
									class="dim-stroke"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<line
									x1="8"
									y1="20"
									x2="45"
									y2="20"
									class="dim-stroke"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<line
									x1="8"
									y1="28"
									x2="52"
									y2="28"
									class="dim-stroke"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<rect
									x="8"
									y="36"
									width="20"
									height="6"
									rx="2"
									class="dim-stroke fill-light"
									stroke-width="0.8"
								/>
							</g>
							<!-- Main AI Response Card (highlighted) -->
							<g transform="translate(55, 45)">
								<rect
									width="90"
									height="60"
									rx="5"
									class="stroke-violet fill-light"
									stroke-width="1.5"
								/>
								<!-- AI icon -->
								<circle
									cx="14"
									cy="14"
									r="6"
									class="stroke-violet fill-violet-dim"
									stroke-width="1"
								/>
								<circle cx="12" cy="13" r="1" class="fill-violet-solid" stroke="none" />
								<circle cx="16" cy="13" r="1" class="fill-violet-solid" stroke="none" />
								<path
									d="M12 16 Q14 18, 16 16"
									class="stroke-violet"
									stroke-width="0.8"
									fill="none"
								/>
								<!-- Response text lines -->
								<line
									x1="26"
									y1="12"
									x2="80"
									y2="12"
									class="stroke-violet"
									stroke-width="1"
									stroke-linecap="round"
									stroke-opacity="0.6"
								/>
								<line
									x1="26"
									y1="18"
									x2="70"
									y2="18"
									class="stroke-violet"
									stroke-width="1"
									stroke-linecap="round"
									stroke-opacity="0.6"
								/>
								<!-- Brand mention highlighted -->
								<rect
									x="10"
									y="28"
									width="35"
									height="10"
									rx="2"
									class="fill-violet-dim stroke-violet"
									stroke-width="1"
								/>
								<line
									x1="14"
									y1="33"
									x2="41"
									y2="33"
									class="stroke-violet"
									stroke-width="1.2"
									stroke-linecap="round"
								/>
								<line
									x1="50"
									y1="33"
									x2="80"
									y2="33"
									class="dim-stroke"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<!-- More text -->
								<line
									x1="10"
									y1="45"
									x2="75"
									y2="45"
									class="dim-stroke"
									stroke-width="1"
									stroke-linecap="round"
								/>
								<line
									x1="10"
									y1="52"
									x2="55"
									y2="52"
									class="dim-stroke"
									stroke-width="1"
									stroke-linecap="round"
								/>
							</g>
							<!-- Monitoring eye indicator -->
							<g transform="translate(155, 25)">
								<ellipse
									cx="12"
									cy="10"
									rx="12"
									ry="8"
									class="stroke-violet fill-violet-dim"
									stroke-width="1.5"
								/>
								<circle cx="12" cy="10" r="4" class="fill-violet-solid" stroke="none" />
								<circle cx="13" cy="9" r="1.5" class="fill-light" stroke="none" />
							</g>
						</svg>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-base font-medium text-foreground">
							{visibilityFeatures[0].title}
						</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">
							{visibilityFeatures[0].description}
						</p>
					</div>
				</div>

				<!-- Sentiment & Positioning -->
				<div class="feature-card">
					<div class="visual-area">
						<svg viewBox="0 0 200 150" class="profound-svg">
							<!-- AI perception pill -->
							<g transform="translate(25, 55)">
								<rect width="65" height="28" rx="14" fill="#f5f5f5" stroke="none" />
								<text
									x="32.5"
									y="18"
									text-anchor="middle"
									class="svg-text svg-text-dim"
									style="font-size: 10px;">affordable</text
								>
							</g>
							<!-- Arrow -->
							<g transform="translate(100, 69)">
								<line x1="0" y1="0" x2="16" y2="0" class="dim-stroke" stroke-width="1.5" />
								<path d="M13 -3 L17 0 L13 3" class="dim-stroke" stroke-width="1.5" fill="none" />
							</g>
							<!-- Desired positioning pill -->
							<g transform="translate(125, 55)">
								<rect width="60" height="28" rx="14" class="fill-violet-solid" stroke="none" />
								<text
									x="30"
									y="18"
									text-anchor="middle"
									class="svg-text"
									style="font-size: 10px; font-weight: 600; fill: white;">premium</text
								>
							</g>
						</svg>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-base font-medium text-foreground">
							{visibilityFeatures[1].title}
						</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">
							{visibilityFeatures[1].description}
						</p>
					</div>
				</div>

				<!-- Product Recommendations -->
				<div class="feature-card">
					<div class="visual-area">
						<svg viewBox="0 0 200 150" class="profound-svg">
							<!-- Row 1 - Hero product (highlighted) -->
							<g transform="translate(20, 30)">
								<circle cx="6" cy="10" r="6" class="fill-violet-solid" stroke="none" />
								<text
									x="6"
									y="13"
									text-anchor="middle"
									class="svg-text"
									style="font-size: 8px; font-weight: 700; fill: white;">1</text
								>
								<rect
									x="20"
									y="4"
									width="100"
									height="12"
									rx="6"
									class="fill-violet-dim"
									stroke="none"
								/>
								<rect
									x="20"
									y="4"
									width="72"
									height="12"
									rx="6"
									class="fill-violet-solid"
									stroke="none"
								/>
								<text
									x="130"
									y="13"
									class="svg-text text-violet"
									style="font-weight: 700; font-size: 11px;">72%</text
								>
							</g>
							<!-- Row 2 -->
							<g transform="translate(20, 60)">
								<circle cx="6" cy="10" r="6" fill="#e5e5e5" stroke="none" />
								<text
									x="6"
									y="13"
									text-anchor="middle"
									class="svg-text svg-text-dim"
									style="font-size: 8px; font-weight: 600;">2</text
								>
								<rect x="20" y="4" width="100" height="12" rx="6" fill="#f5f5f5" stroke="none" />
								<rect x="20" y="4" width="38" height="12" rx="6" fill="#d4d4d4" stroke="none" />
								<text x="130" y="13" class="svg-text svg-text-dim" style="font-size: 11px;"
									>38%</text
								>
							</g>
							<!-- Row 3 -->
							<g transform="translate(20, 90)">
								<circle cx="6" cy="10" r="6" fill="#e5e5e5" stroke="none" />
								<text
									x="6"
									y="13"
									text-anchor="middle"
									class="svg-text svg-text-dim"
									style="font-size: 8px; font-weight: 600;">3</text
								>
								<rect x="20" y="4" width="100" height="12" rx="6" fill="#f5f5f5" stroke="none" />
								<rect x="20" y="4" width="18" height="12" rx="6" fill="#d4d4d4" stroke="none" />
								<text x="130" y="13" class="svg-text svg-text-dim" style="font-size: 11px;"
									>18%</text
								>
							</g>
						</svg>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-base font-medium text-foreground">
							{visibilityFeatures[2].title}
						</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">
							{visibilityFeatures[2].description}
						</p>
					</div>
				</div>

				<!-- Trend Detection -->
				<div class="feature-card">
					<div class="visual-area">
						<svg viewBox="0 0 200 150" class="profound-svg">
							<!-- Background trend line (faded) -->
							<path
								d="M20 100 C 50 100, 70 95, 100 90 S 140 85, 180 80"
								class="dim-stroke"
								stroke-width="1"
								fill="none"
							/>
							<!-- Secondary emerging trend -->
							<path
								d="M20 95 C 50 90, 80 75, 110 60 S 150 40, 180 35"
								class="stroke-violet"
								stroke-width="1"
								stroke-opacity="0.4"
								fill="none"
							/>
							<!-- Primary emerging trend (highlighted) -->
							<path
								d="M20 110 C 40 105, 60 85, 90 70 S 130 35, 180 15"
								class="stroke-violet"
								stroke-width="2"
								fill="none"
							/>
							<path
								d="M20 110 C 40 105, 60 85, 90 70 S 130 35, 180 15 L 180 130 L 20 130 Z"
								class="fill-violet-dim"
								stroke="none"
							/>
							<!-- Data points on primary trend -->
							<circle cx="60" cy="88" r="3" class="fill-light stroke-violet" stroke-width="1" />
							<circle cx="110" cy="52" r="3" class="fill-light stroke-violet" stroke-width="1" />
							<!-- Emerging topic indicator (pulsing dot) -->
							<circle
								cx="180"
								cy="15"
								r="6"
								class="fill-violet-solid"
								stroke="none"
								opacity="0.2"
							/>
							<circle cx="180" cy="15" r="4" class="fill-violet-solid" stroke="none" />
							<!-- Upward arrow -->
							<path
								d="M172 22 L180 12 L188 22"
								class="stroke-violet"
								stroke-width="1.5"
								fill="none"
							/>
							<!-- Trend labels -->
							<g transform="translate(25, 25)">
								<rect
									width="55"
									height="18"
									rx="3"
									class="fill-violet-dim stroke-violet"
									stroke-width="1"
								/>
								<text x="8" y="12" class="svg-text text-violet" style="font-size: 8px;"
									>Emerging</text
								>
								<circle cx="48" cy="9" r="3" class="fill-violet-solid" stroke="none" />
							</g>
							<!-- Percentage label -->
							<text
								x="175"
								y="8"
								text-anchor="end"
								class="svg-text text-violet"
								style="font-weight: 700; font-size: 11px;">+47%</text
							>
							<!-- X-axis -->
							<line x1="20" y1="130" x2="180" y2="130" class="dim-stroke" />
							<!-- Time markers -->
							<line x1="60" y1="130" x2="60" y2="133" class="dim-stroke" />
							<line x1="110" y1="130" x2="110" y2="133" class="dim-stroke" />
							<line x1="160" y1="130" x2="160" y2="133" class="dim-stroke" />
						</svg>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-base font-medium text-foreground">
							{visibilityFeatures[3].title}
						</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">
							{visibilityFeatures[3].description}
						</p>
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
		transition:
			border-color 200ms cubic-bezier(0.4, 0, 0.2, 1),
			transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
			box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: 12px;
	}
	.feature-card:hover {
		border-color: #d1d5db;
		transform: translateY(-4px);
		box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
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

	/* AI Visibility Colors (Violet) */
	.stroke-violet {
		stroke: #8b5cf6;
	}
	.fill-violet-dim {
		fill: rgba(139, 92, 246, 0.06);
	}
	.fill-violet-solid {
		fill: #8b5cf6;
	}
	.text-violet {
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
