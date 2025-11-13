<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { ArrowRight } from '@lucide/svelte';

	let name = '';
	let email = '';
	let isSubmitting = false;
	let message = '';
	let messageType: 'success' | 'error' | '' = '';

	async function handleSubmit() {
		if (!name.trim() || !email.trim()) {
			message = 'Please fill in all fields';
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
					email: email.trim()
				})
			});

			const result = await response.json();

			if (response.ok) {
				message = result.message || 'Successfully joined waitlist!';
				messageType = 'success';
				name = '';
				email = '';
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

<div class="min-h-screen bg-white flex items-center justify-center">
	<div class="container mx-auto max-w-md px-6">
		<div class="rounded-xl border-2 border-gray-200 bg-white p-8">
			<div class="space-y-5">
				<div>
					<Label for="name" class="mb-2 text-sm font-medium text-gray-700">Name</Label>
					<Input
						id="name"
						type="text"
						placeholder="Your name"
						class="h-12 px-4 text-base"
						bind:value={name}
						onkeypress={handleKeyPress}
						disabled={isSubmitting}
					/>
				</div>

				<div>
					<Label for="email" class="mb-2 text-sm font-medium text-gray-700">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="your@email.com"
						class="h-12 px-4 text-base"
						bind:value={email}
						onkeypress={handleKeyPress}
						disabled={isSubmitting}
					/>
				</div>

				<Button
					size="lg"
					class="h-12 w-full text-base"
					onclick={handleSubmit}
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Joining...' : 'Request Access'}
					{#if !isSubmitting}
						<ArrowRight class="ml-2 h-5 w-5" />
					{/if}
				</Button>

				{#if message}
					<div
						class="text-center text-sm {messageType === 'success'
							? 'text-green-600'
							: 'text-red-600'}"
					>
						{message}
					</div>
				{/if}
			</div>
		</div>

		<div class="mt-8 text-center">
			<a href="/" class="text-sm text-gray-600 transition-colors hover:text-gray-900">
				← Back to home
			</a>
		</div>
	</div>
</div>
