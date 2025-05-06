<script lang="ts">
	import { Layer } from 'svelte-canvas'

	let { x, y, color, col, onclick, tileSize } = $props()

	let _x = x * tileSize
	let _y = y * tileSize

	const onDown = (e) => {
		onclick?.({ xTile: x, yTile: y, col, ...e })
	}

	const render = ({ context }) => {
		context.fillStyle = color
		context.fillRect(_x, _y, tileSize, tileSize)
	}
</script>

<Layer onmousedown={onDown} {render} />
