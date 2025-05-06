<script lang="ts">
	import { cubicInOut } from 'svelte/easing'
	// import { scale } from 'svelte/transition'
	// const scaleOp = { start: 0, delay: 0.2, easing: cubicInOut }
	function fadeScale(
		node,
		{ delay = 0, duration = 200, easing = (x) => x, baseScale = 0 }
	) {
		const o = +getComputedStyle(node).opacity
		const m = getComputedStyle(node).transform.match(/scale\(([0-9.]+)\)/)
		const s = m ? m[1] : 1
		const is = 1 - baseScale

		return {
			delay,
			duration,
			css: (t) => {
				const eased = easing(t)
				return `opacity: ${eased * o}; transform: scale(${eased * s * is + baseScale})`
			}
		}
	}
</script>

<!-- transition:scale={{ start: 0, delay: 0.2, easing: cubicInOut }}  -->
<div
	class="bg-accent-900 absolute inset-0 grid place-content-center text-center"
	transition:fadeScale={{
		delay: 250,
		duration: 500,
		easing: cubicInOut,
		baseScale: 0.5
	}}>
	<div class="custom-loader"></div>
	<span class="sr-only">... loading</span>
</div>

<style>
</style>
