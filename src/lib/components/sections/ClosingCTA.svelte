<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<section
	class="relative overflow-hidden pb-40 pt-40"
	style="background: linear-gradient(180deg, #ffffff 0%, #eff6ff 100%);"
>
	<!-- Gradient Blobs Background -->
	<div class="pointer-events-none absolute inset-0">
		<!-- Large blue blob -->
		<div
			class="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/20 blur-3xl"
			style="animation: float 20s ease-in-out infinite;"
		></div>

		<!-- Purple blob -->
		<div
			class="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-purple-400/15 to-pink-500/15 blur-3xl"
			style="animation: float 25s ease-in-out infinite 5s;"
		></div>

		<!-- Cyan blob -->
		<div
			class="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/15 to-blue-500/15 blur-3xl"
			style="animation: float 30s ease-in-out infinite 10s;"
		></div>
	</div>

	<!-- Floating Orbs -->
	<div class="pointer-events-none absolute inset-0">
		<!-- Orb 1 -->
		<div
			class="absolute left-[15%] top-[20%] h-12 w-12 rounded-full bg-gradient-to-br from-blue-500/25 to-indigo-600/25 blur-sm"
			style="animation: floatOrb 15s ease-in-out infinite;"
		></div>

		<!-- Orb 2 -->
		<div
			class="absolute right-[20%] top-[35%] h-8 w-8 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 blur-sm"
			style="animation: floatOrb 18s ease-in-out infinite 3s;"
		></div>

		<!-- Orb 3 -->
		<div
			class="absolute bottom-[25%] left-[25%] h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-sm"
			style="animation: floatOrb 22s ease-in-out infinite 7s;"
		></div>

		<!-- Orb 4 -->
		<div
			class="absolute bottom-[40%] right-[30%] h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500/25 to-purple-600/25 blur-sm"
			style="animation: floatOrb 20s ease-in-out infinite 12s;"
		></div>
	</div>

	<div class="container relative z-10 mx-auto max-w-6xl px-6">
		<div class="text-center">
			<h2 class="mb-4 text-3xl font-bold leading-tight text-gray-900">
				AI search is changing e-commerce
			</h2>
			<p class="text-md mx-auto mb-8 max-w-3xl leading-relaxed text-gray-600">
				Reach billions of consumers already using <br />
				AI search to discover brands and products
			</p>
			<a href="/join">
				<Button size="lg" class="px-10 py-6 text-lg">Request Access</Button>
			</a>
		</div>
	</div>
</section>

<style>
	@keyframes float {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
			opacity: 0.6;
		}
		33% {
			transform: translate(30px, -30px) scale(1.1);
			opacity: 0.8;
		}
		66% {
			transform: translate(-20px, 20px) scale(0.9);
			opacity: 0.7;
		}
	}

	@keyframes floatOrb {
		0%,
		100% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(20px, -20px);
		}
		50% {
			transform: translate(-15px, -30px);
		}
		75% {
			transform: translate(15px, 10px);
		}
	}
</style>
