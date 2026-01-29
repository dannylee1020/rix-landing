<script lang="ts">
	import Navigation from '$lib/components/sections/Navigation.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
</script>

<svelte:head>
	<title>Privacy Policy - Rix</title>
	<meta
		name="description"
		content="Rix privacy policy. Learn how we collect, use, and protect your data when using our AI search intelligence platform for e-commerce."
	/>
	<link rel="canonical" href="https://tryrix.com/privacy" />
</svelte:head>

<Navigation />

<div class="bg-background min-h-screen">
	<!-- Header with subtle glow -->
	<header
		class="border-border/50 relative overflow-hidden border-b pb-12 pt-32"
		style="margin-top: -32px;"
	>
		<div
			class="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(5,74,247,0.06)_0%,_rgba(5,74,247,0.02)_50%,_transparent_70%)]"
		></div>
		<div class="container relative z-10 mx-auto max-w-screen-xl px-6">
			<div class="mx-auto max-w-3xl">
				<p class="text-muted-foreground mb-3 text-sm font-medium uppercase tracking-wider">Legal</p>
				<h1 class="text-foreground mb-4 text-4xl font-bold tracking-tight md:text-5xl">
					Privacy Policy
				</h1>
				<p class="text-muted-foreground text-base">Last Updated: December 31, 2025</p>
			</div>
		</div>
	</header>

	<main class="container mx-auto max-w-screen-xl px-6 py-16">
		<div class="mx-auto max-w-3xl">
			<div class="flex flex-col gap-16">
				<!-- Introduction -->
				<section class="flex flex-col gap-5">
					<p class="text-foreground text-base leading-relaxed">
						Rix ("we", "our", or "us") provides AI search intelligence services to e-commerce brands.
						This Privacy Policy explains how we collect, use, disclose, and protect information when
						you use our website, dashboard, and analytics platform (collectively, the "Services").
					</p>
					<p class="text-foreground text-base leading-relaxed">
						This Privacy Policy applies to information we collect from our customers ("Customers")
						who use our platform to analyze their brand presence across AI search engines. For
						information we process on behalf of our Customers regarding their end users, our
						Customers' own privacy policies govern that data, and we act as a data processor under
						their instructions.
					</p>
				</section>

				<!-- 1. Personal Data We Collect -->
				<section class="flex flex-col gap-6">
					<div class="flex items-baseline gap-4">
						<span class="text-muted-foreground/60 text-sm font-medium tabular-nums">01</span>
						<h2 class="text-foreground text-2xl font-semibold tracking-tight">
							Personal Data We Collect
						</h2>
					</div>

					<div class="ml-8 flex flex-col gap-8">
						<p class="text-foreground text-base leading-relaxed">
							We collect personal data in the following ways:
						</p>

						<div class="flex flex-col gap-4">
							<h3 class="text-foreground text-lg font-medium">Information You Provide</h3>
							<ul class="text-foreground flex flex-col gap-3 text-base leading-relaxed">
								<li
									class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
								>
									<span class="font-medium">Account Information:</span> When you create an account, we
									collect your name, email address, company name, and account credentials.
								</li>
								<li
									class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
								>
									<span class="font-medium">Product Catalog Data:</span> You may provide or connect your
									product catalog information, including product names, descriptions, SKUs, and categories,
									to enable our analytics matching capabilities.
								</li>
								<li
									class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
								>
									<span class="font-medium">Payment Information:</span> If you subscribe to our paid
									services, we collect billing details and payment information through our payment processors.
								</li>
								<li
									class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
								>
									<span class="font-medium">Communications:</span> When you contact us for support or
									inquiries, we collect the content of those communications along with your contact information.
								</li>
							</ul>
						</div>

						<div class="flex flex-col gap-4">
							<h3 class="text-foreground text-lg font-medium">
								Information Collected Automatically
							</h3>
							<ul class="text-foreground flex flex-col gap-3 text-base leading-relaxed">
								<li
									class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
								>
									<span class="font-medium">Usage Data:</span> We collect information about how you interact
									with our dashboard, including pages viewed, features used, and time spent on the platform.
								</li>
								<li
									class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
								>
									<span class="font-medium">Device and Browser Information:</span> We collect your IP
									address, browser type, operating system, and device identifiers when you access our
									Services.
								</li>
								<li
									class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
								>
									<span class="font-medium">Cookies:</span> We use essential cookies to maintain your
									session and preferences, and analytics cookies to understand how our Services are used.
									You can manage cookie preferences through your browser settings.
								</li>
							</ul>
						</div>

						<div class="flex flex-col gap-4">
							<h3 class="text-foreground text-lg font-medium">
								Information From AI Platform Monitoring
							</h3>
							<ul class="text-foreground flex flex-col gap-3 text-base leading-relaxed">
								<li
									class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
								>
									<span class="font-medium">AI Response Data:</span> Our platform queries AI search engines
									(such as ChatGPT and Google AI) using automated prompts to analyze how these platforms
									represent your brand. We collect and store the responses, including brand mentions,
									product recommendations, and cited sources.
								</li>
								<li
									class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
								>
									<span class="font-medium">Competitive Intelligence:</span> Through our AI monitoring,
									we may collect publicly available information about competitor brands that appear in
									AI responses alongside your brand.
								</li>
							</ul>
						</div>

						<div class="flex flex-col gap-4">
							<h3 class="text-foreground text-lg font-medium">
								Information From E-commerce Integrations
							</h3>
							<ul class="text-foreground flex flex-col gap-3 text-base leading-relaxed">
								<li
									class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
								>
									<span class="font-medium">Traffic Analytics:</span> When you install our tracking integration,
									we collect anonymized visitor data from your website to identify traffic originating
									from AI platforms, including referrer information, session behavior, and conversion
									events.
								</li>
								<li
									class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
								>
									<span class="font-medium">Platform Integrations:</span> If you connect third-party
									platforms (such as Shopify), we access data according to the permissions you grant,
									which may include order data and product information necessary to provide revenue attribution.
								</li>
							</ul>
						</div>
					</div>
				</section>

				<!-- 2. How We Use Personal Data -->
				<section class="flex flex-col gap-6">
					<div class="flex items-baseline gap-4">
						<span class="text-muted-foreground/60 text-sm font-medium tabular-nums">02</span>
						<h2 class="text-foreground text-2xl font-semibold tracking-tight">
							How We Use Personal Data
						</h2>
					</div>

					<div class="ml-8 flex flex-col gap-5">
						<p class="text-foreground text-base leading-relaxed">
							We use the information we collect for the following purposes:
						</p>
						<ul class="text-foreground flex flex-col gap-3 text-base leading-relaxed">
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Provide Our Services:</span> To operate the platform, deliver
								AI search intelligence, generate visibility reports, track traffic attribution, and provide
								competitive intelligence.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Product Matching:</span> To match products mentioned in AI
								responses against your catalog and calculate accuracy metrics.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Improve Our Services:</span> To analyze usage patterns, develop
								new features, and enhance the accuracy of our analytics.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Communications:</span> To send service updates, security alerts,
								and respond to your inquiries.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Security and Compliance:</span> To detect and prevent fraud,
								protect against security threats, and comply with legal obligations.
							</li>
						</ul>
						<p class="text-foreground text-base leading-relaxed">
							We do not use your data to train machine learning models. Your product catalog and
							analytics data remain dedicated to providing services to you.
						</p>
					</div>
				</section>

				<!-- 3. Disclosure of Personal Data -->
				<section class="flex flex-col gap-6">
					<div class="flex items-baseline gap-4">
						<span class="text-muted-foreground/60 text-sm font-medium tabular-nums">03</span>
						<h2 class="text-foreground text-2xl font-semibold tracking-tight">
							Disclosure of Personal Data
						</h2>
					</div>

					<div class="ml-8 flex flex-col gap-5">
						<p class="text-foreground text-base leading-relaxed">
							We do not sell your personal data. We may share information in the following
							circumstances:
						</p>
						<ul class="text-foreground flex flex-col gap-3 text-base leading-relaxed">
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Service Providers:</span> We work with trusted vendors for
								cloud infrastructure, data storage, payment processing, and analytics. These providers
								are contractually bound to use your data only to perform services on our behalf.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Business Transfers:</span> In the event of a merger, acquisition,
								or sale of assets, your information may be transferred as part of that transaction. We
								will notify you of any such change.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Legal Requirements:</span> We may disclose information if required
								by law, court order, or government request, or when necessary to protect our rights,
								property, or safety.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">With Your Consent:</span> We may share information for other
								purposes with your explicit consent.
							</li>
						</ul>
					</div>
				</section>

				<!-- 4. Data Retention -->
				<section class="flex flex-col gap-6">
					<div class="flex items-baseline gap-4">
						<span class="text-muted-foreground/60 text-sm font-medium tabular-nums">04</span>
						<h2 class="text-foreground text-2xl font-semibold tracking-tight">Data Retention</h2>
					</div>

					<div class="ml-8 flex flex-col gap-5">
						<p class="text-foreground text-base leading-relaxed">
							We retain your personal data for as long as necessary to provide our Services and
							fulfill the purposes described in this policy. Specific retention periods include:
						</p>
						<ul class="text-foreground flex flex-col gap-3 text-base leading-relaxed">
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Account Information:</span> Retained while your account is
								active and for a reasonable period afterward to comply with legal obligations.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Analytics Data:</span> AI monitoring data and traffic analytics
								are retained according to your subscription plan, typically for the duration of your
								subscription plus a short archival period.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Usage Logs:</span> Technical logs are retained for up to 90
								days for security and debugging purposes.
							</li>
						</ul>
						<p class="text-foreground text-base leading-relaxed">
							When you delete your account, we will delete or anonymize your data within 30 days,
							except where retention is required by law.
						</p>
					</div>
				</section>

				<!-- 5. Your Rights -->
				<section class="flex flex-col gap-6">
					<div class="flex items-baseline gap-4">
						<span class="text-muted-foreground/60 text-sm font-medium tabular-nums">05</span>
						<h2 class="text-foreground text-2xl font-semibold tracking-tight">Your Rights</h2>
					</div>

					<div class="ml-8 flex flex-col gap-5">
						<p class="text-foreground text-base leading-relaxed">
							Depending on your location, you may have the following rights regarding your personal
							data:
						</p>
						<ul class="text-foreground flex flex-col gap-3 text-base leading-relaxed">
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Access:</span> Request a copy of the personal data we hold
								about you.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Correction:</span> Request that we correct inaccurate or incomplete
								data.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Deletion:</span> Request that we delete your personal data,
								subject to certain legal exceptions.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Data Portability:</span> Request your data in a structured,
								commonly used format.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Withdraw Consent:</span> Where processing is based on consent,
								you may withdraw it at any time.
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								<span class="font-medium">Object to Processing:</span> Object to certain types of processing,
								including direct marketing.
							</li>
						</ul>
						<p class="text-foreground text-base leading-relaxed">
							To exercise these rights, contact us at <a
								href="mailto:privacy@tryrix.com"
								class="font-medium text-[var(--brand)] transition-colors duration-150 hover:underline"
								>privacy@tryrix.com</a
							>. We will respond to your request within 30 days.
						</p>
					</div>
				</section>

				<!-- 6. Data Security -->
				<section class="flex flex-col gap-6">
					<div class="flex items-baseline gap-4">
						<span class="text-muted-foreground/60 text-sm font-medium tabular-nums">06</span>
						<h2 class="text-foreground text-2xl font-semibold tracking-tight">Data Security</h2>
					</div>

					<div class="ml-8 flex flex-col gap-5">
						<p class="text-foreground text-base leading-relaxed">
							We implement technical and organizational measures to protect your data, including:
						</p>
						<ul class="text-foreground flex flex-col gap-3 text-base leading-relaxed">
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								Encryption of data in transit and at rest
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								Secure authentication and access controls
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								Regular security assessments and monitoring
							</li>
							<li
								class="before:bg-border relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
							>
								Employee training on data protection practices
							</li>
						</ul>
						<p class="text-foreground text-base leading-relaxed">
							While we strive to protect your information, no method of transmission or storage is
							completely secure. We encourage you to use strong passwords and protect your account
							credentials.
						</p>
					</div>
				</section>

				<!-- 7. Children's Privacy -->
				<section class="flex flex-col gap-6">
					<div class="flex items-baseline gap-4">
						<span class="text-muted-foreground/60 text-sm font-medium tabular-nums">07</span>
						<h2 class="text-foreground text-2xl font-semibold tracking-tight">
							Children's Privacy
						</h2>
					</div>

					<div class="ml-8">
						<p class="text-foreground text-base leading-relaxed">
							Our Services are designed for business use and are not directed at individuals under
							18 years of age. We do not knowingly collect personal data from children. If you
							believe we have inadvertently collected such information, please contact us and we
							will promptly delete it.
						</p>
					</div>
				</section>

				<!-- 8. International Data Transfers -->
				<section class="flex flex-col gap-6">
					<div class="flex items-baseline gap-4">
						<span class="text-muted-foreground/60 text-sm font-medium tabular-nums">08</span>
						<h2 class="text-foreground text-2xl font-semibold tracking-tight">
							International Data Transfers
						</h2>
					</div>

					<div class="ml-8">
						<p class="text-foreground text-base leading-relaxed">
							Your data may be processed and stored in the United States or other countries where
							our service providers operate. When we transfer data internationally, we implement
							appropriate safeguards to protect your information in accordance with applicable data
							protection laws.
						</p>
					</div>
				</section>

				<!-- 9. Changes to This Policy -->
				<section class="flex flex-col gap-6">
					<div class="flex items-baseline gap-4">
						<span class="text-muted-foreground/60 text-sm font-medium tabular-nums">09</span>
						<h2 class="text-foreground text-2xl font-semibold tracking-tight">
							Changes to This Policy
						</h2>
					</div>

					<div class="ml-8">
						<p class="text-foreground text-base leading-relaxed">
							We may update this Privacy Policy from time to time. When we make material changes, we
							will notify you by email or through a notice on our website prior to the changes
							taking effect. We encourage you to review this policy periodically.
						</p>
					</div>
				</section>

				<!-- 10. Contact Us -->
				<section class="flex flex-col gap-6">
					<div class="flex items-baseline gap-4">
						<span class="text-muted-foreground/60 text-sm font-medium tabular-nums">10</span>
						<h2 class="text-foreground text-2xl font-semibold tracking-tight">Contact Us</h2>
					</div>

					<div class="ml-8 flex flex-col gap-4">
						<p class="text-foreground text-base leading-relaxed">
							If you have questions about this Privacy Policy or our data practices, please contact
							us:
						</p>
						<div
							class="text-foreground border-border/50 bg-muted/30 rounded-xl border p-6 text-base leading-relaxed"
						>
							<p class="flex items-center gap-2">
								<span class="text-muted-foreground">Email:</span>
								<a
									href="mailto:admin@tryrix.com"
									class="font-medium text-[var(--brand)] transition-colors duration-150 hover:underline"
									>admin@tryrix.com</a
								>
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	</main>
</div>

<Footer />
