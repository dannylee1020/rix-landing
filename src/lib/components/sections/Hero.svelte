<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Card } from '$lib/components/ui/card';
	import { ArrowRight, Eye, Search, BarChart3, TrendingUp } from '@lucide/svelte';

	let email = '';
	let isSubmitting = false;
	let message = '';
	let messageType: 'success' | 'error' | '' = '';

	async function handleSubmit() {
		if (!email.trim()) {
			message = 'Please enter your email';
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
				body: JSON.stringify({ email: email.trim() })
			});

			const result = await response.json();

			if (response.ok) {
				message = result.message || 'Successfully joined waitlist!';
				messageType = 'success';
				email = ''; // Clear the form
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

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			handleSubmit();
		}
	}
</script>

<section
	class="relative flex items-center pt-16"
	style="background: linear-gradient(90deg, #ffffff 0%, #dbeafe 100%); min-height: 80vh; margin-top: -64px;"
>
	<div class="container mx-auto max-w-screen-xl px-4">
		<div class="mx-auto max-w-3xl text-center">
			<!-- Main Headline -->
			<h1 class="text-foreground mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
				Own Your Brand's <br />
				<span class="text-primary">AI Journey</span>
			</h1>

			<!-- Subheadline -->
			<p class="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg md:text-lg">
				From tracking how AI sees you to optimizing how customers find you.
			</p>

			<!-- Beta CTA -->
			<div class="mx-auto mb-12 max-w-md">
				<div class="flex flex-col gap-3 sm:flex-row">
					<Input
						type="email"
						placeholder="Enter your email"
						class="h-12 flex-1 px-4 text-base"
						bind:value={email}
						onkeypress={handleKeyPress}
						disabled={isSubmitting}
					/>
					<Button
						size="lg"
						class="h-12 whitespace-nowrap px-8"
						onclick={handleSubmit}
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Joining...' : 'Join Beta'}
						{#if !isSubmitting}
							<ArrowRight class="ml-2 h-5 w-5" />
						{/if}
					</Button>
				</div>
				{#if message}
					<div class="mt-3 text-sm {messageType === 'success' ? 'text-green-600' : 'text-red-600'}">
						{message}
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
