<script lang="ts">
	import { Layer } from 'svelte-canvas'

	let { hero, color, col, onclick, tileSize } = $props()

	let _x = $derived(hero.x * tileSize)
	let _y = $derived(hero.y * tileSize)

	const onDown = (e) => {
		onclick?.({ xTile: x, yTile: y, col, ...e })
	}

	const render = ({ context }) => {
		context.fillStyle = color
		context.fillRect(_x, _y, tileSize, tileSize)
	}
</script>

<Layer onmousedown={onDown} {render} />
