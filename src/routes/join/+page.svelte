<svelte:head>
	<title>Request Access - Rix</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<script lang="ts">
	let name = $state('');
	let email = $state('');
	let role = $state('');
	let brandName = $state('');
	let website = $state('');
	let isSubmitting = $state(false);
	let message = $state('');
	let messageType = $state<'success' | 'error' | ''>('');

	const roles = [
		{ value: 'founder', label: 'Founder' },
		{ value: 'growth', label: 'Growth' },
		{ value: 'marketing', label: 'Marketing' },
		{ value: 'operation', label: 'Operation' },
		{ value: 'others', label: 'Others' }
	];

	const benefits = [
		{ text: 'See how AI describes your brand', icon: 'eye' },
		{ text: 'Track competitor visibility', icon: 'chart' },
		{ text: 'Know which sources AI trusts', icon: 'shield' },
		{ text: 'Get actionable recommendations', icon: 'sparkle' }
	];

	async function handleSubmit() {
		if (!name.trim() || !email.trim() || !role || !brandName.trim() || !website.trim()) {
			message = 'Please fill in all required fields';
			messageType = 'error';
			return;
		}

		isSubmitting = true;
		message = '';
		messageType = '';

		try {
			const response = await fetch('/api/waitlist', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name.trim(),
					email: email.trim(),
					role,
					brandName: brandName.trim(),
					website: website.trim()
				})
			});

			const result = await response.json();

			if (response.ok) {
				message = result.message || 'Successfully joined waitlist!';
				messageType = 'success';
				name = '';
				email = '';
				role = '';
				brandName = '';
				website = '';
			} else {
				message = result.error || 'Something went wrong';
				messageType = 'error';
			}
		} catch (error) {
			message = 'Network error. Please try again.';
			messageType = 'error';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div class="relative min-h-screen bg-white overflow-hidden">
	<!-- Animated gradient orbs -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="absolute -top-[40%] -left-[20%] h-[80%] w-[60%] rounded-full opacity-[0.03] blur-3xl"
			style="background: radial-gradient(circle, var(--brand) 0%, transparent 70%); animation: float1 20s ease-in-out infinite;"
		></div>
		<div
			class="absolute -bottom-[30%] -right-[20%] h-[70%] w-[50%] rounded-full opacity-[0.04] blur-3xl"
			style="background: radial-gradient(circle, var(--brand) 0%, transparent 70%); animation: float2 25s ease-in-out infinite;"
		></div>
	</div>

	<!-- Dot pattern background -->
	<div
		class="pointer-events-none absolute inset-0"
		style="background-image: radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px); background-size: 24px 24px;"
	></div>

	<!-- Content -->
	<div class="relative flex min-h-screen items-center justify-center px-6 py-16">
		<div class="w-full max-w-5xl">
			<!-- Back link - top left -->
			<div class="absolute top-6 left-6 md:top-8 md:left-8">
				<a
					href="/"
					class="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="m12 19-7-7 7-7" />
						<path d="M19 12H5" />
					</svg>
					Back
				</a>
			</div>

			<!-- Split layout container -->
			<div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
				<!-- Left side: Value proposition -->
				<div class="text-center lg:text-left order-2 lg:order-1">
					<!-- Logo -->
					<div class="mb-8">
						<a
							href="/"
							class="inline-block text-xl font-semibold tracking-tight text-foreground transition-opacity duration-150 hover:opacity-70"
						>
							Rix
						</a>
					</div>

					<!-- Headline -->
					<h1
						class="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
					>
						See what AI says<br class="hidden sm:block" /> about your brand
					</h1>

					<p class="mt-4 text-base text-muted-foreground max-w-md mx-auto lg:mx-0">
						Get early access to AI search analytics. Understand how ChatGPT, Perplexity, and other
						AI assistants represent your brand.
					</p>

					<!-- Benefits list -->
					<div class="mt-8 space-y-3">
						{#each benefits as benefit}
							<div
								class="flex items-center gap-3 justify-center lg:justify-start group"
							>
								<div
									class="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 transition-colors duration-200 group-hover:bg-neutral-200"
								>
									{#if benefit.icon === 'eye'}
										<svg
											class="h-4 w-4 text-neutral-600"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
											<circle cx="12" cy="12" r="3" />
										</svg>
									{:else if benefit.icon === 'chart'}
										<svg
											class="h-4 w-4 text-neutral-600"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="M3 3v16a2 2 0 0 0 2 2h16" />
											<path d="m19 9-5 5-4-4-3 3" />
										</svg>
									{:else if benefit.icon === 'shield'}
										<svg
											class="h-4 w-4 text-neutral-600"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
											<path d="m9 12 2 2 4-4" />
										</svg>
									{:else if benefit.icon === 'sparkle'}
										<svg
											class="h-4 w-4 text-neutral-600"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
										</svg>
									{/if}
								</div>
								<span class="text-sm text-foreground">{benefit.text}</span>
							</div>
						{/each}
					</div>

					<!-- Social proof -->
					<div class="mt-10 pt-8 border-t border-neutral-100">
						<p class="text-xs text-muted-foreground uppercase tracking-wider mb-3">
							Built for beauty brands
						</p>
						<p class="text-sm text-muted-foreground">
							Join brands already optimizing their AI visibility
						</p>
					</div>
				</div>

				<!-- Right side: Form card -->
				<div class="order-1 lg:order-2">
					<div
						class="relative rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-xl shadow-neutral-900/[0.03]"
					>
						<!-- Form header -->
						<div class="mb-6 text-center">
							<h2 class="text-lg font-semibold text-foreground">Request early access</h2>
							<p class="mt-1 text-sm text-muted-foreground">
								Limited spots available for beta users
							</p>
						</div>

						<!-- Form -->
						<form
							onsubmit={(e) => {
								e.preventDefault();
								handleSubmit();
							}}
							class="space-y-4"
						>
							<!-- Name -->
							<div>
								<label for="name" class="mb-1.5 block text-sm font-medium text-foreground">
									Name <span class="text-muted-foreground">*</span>
								</label>
								<input
									id="name"
									type="text"
									placeholder="Your name"
									bind:value={name}
									disabled={isSubmitting}
									class="h-11 w-full rounded-lg border border-neutral-200 bg-white px-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-150 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-100 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
								/>
							</div>

							<!-- Work Email -->
							<div>
								<label for="email" class="mb-1.5 block text-sm font-medium text-foreground">
									Work Email <span class="text-muted-foreground">*</span>
								</label>
								<input
									id="email"
									type="email"
									placeholder="you@company.com"
									bind:value={email}
									disabled={isSubmitting}
									class="h-11 w-full rounded-lg border border-neutral-200 bg-white px-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-150 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-100 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
								/>
							</div>

							<!-- Role -->
							<div>
								<label for="role" class="mb-1.5 block text-sm font-medium text-foreground">
									Role <span class="text-muted-foreground">*</span>
								</label>
								<div class="relative">
									<select
										id="role"
										bind:value={role}
										disabled={isSubmitting}
										class="h-11 w-full appearance-none rounded-lg border border-neutral-200 bg-white px-3.5 pr-10 text-sm text-foreground transition-all duration-150 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-100 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
										class:text-muted-foreground={!role}
									>
										<option value="" disabled>Select your role</option>
										{#each roles as r}
											<option value={r.value}>{r.label}</option>
										{/each}
									</select>
									<svg
										class="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="m6 9 6 6 6-6" />
									</svg>
								</div>
							</div>

							<!-- Brand Name -->
							<div>
								<label for="brandName" class="mb-1.5 block text-sm font-medium text-foreground">
									Brand Name <span class="text-muted-foreground">*</span>
								</label>
								<input
									id="brandName"
									type="text"
									placeholder="Your brand or company name"
									bind:value={brandName}
									disabled={isSubmitting}
									class="h-11 w-full rounded-lg border border-neutral-200 bg-white px-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-150 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-100 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
								/>
							</div>

							<!-- Website -->
							<div>
								<label for="website" class="mb-1.5 block text-sm font-medium text-foreground">
									Website <span class="text-muted-foreground">*</span>
								</label>
								<input
									id="website"
									type="url"
									placeholder="https://yourbrand.com"
									bind:value={website}
									disabled={isSubmitting}
									class="h-11 w-full rounded-lg border border-neutral-200 bg-white px-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-150 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-100 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
								/>
							</div>

							<!-- Submit Button -->
							<div class="pt-2">
								<button
									type="submit"
									disabled={isSubmitting}
									class="group relative h-12 w-full overflow-hidden rounded-full bg-foreground text-sm font-medium text-background transition-all duration-200 hover:scale-[1.01] disabled:pointer-events-none disabled:opacity-50"
								>
									<span
										class="relative z-10 flex items-center justify-center gap-2"
									>
										{#if isSubmitting}
											<svg
												class="h-4 w-4 animate-spin"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													class="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													stroke-width="4"
												></circle>
												<path
													class="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Submitting...
										{:else}
											Get Early Access
											<svg
												class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path d="M5 12h14" />
												<path d="m12 5 7 7-7 7" />
											</svg>
										{/if}
									</span>
								</button>
							</div>

							<!-- Message -->
							{#if message}
								<div
									class="rounded-lg px-4 py-3 text-center text-sm {messageType === 'success'
										? 'bg-green-50 text-green-700 border border-green-100'
										: 'bg-red-50 text-red-700 border border-red-100'}"
								>
									{#if messageType === 'success'}
										<div class="flex items-center justify-center gap-2">
											<svg
												class="h-4 w-4"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
												<path d="m9 11 3 3L22 4" />
											</svg>
											{message}
										</div>
									{:else}
										{message}
									{/if}
								</div>
							{/if}
						</form>

						<!-- Privacy note -->
						<p class="mt-5 text-center text-xs text-muted-foreground">
							We respect your privacy. No spam, ever.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes float1 {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(5%, 10%) scale(1.1);
		}
	}

	@keyframes float2 {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(-5%, -8%) scale(1.05);
		}
	}
</style>
