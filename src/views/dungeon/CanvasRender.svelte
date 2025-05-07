<script lang="ts">
	import GridTile from './GridTile.svelte'

	import { Canvas, Layer } from 'svelte-canvas'
	import HeroTile from './HeroTile.svelte'

	let { value, tileSize, rows, cols, hero } = $props()

	const tileclick = (e) => {
		console.log(e)
	}
</script>

{#if value?.tileMap}
	<Canvas
		layerEvents
		width={cols * tileSize}
		height={rows * tileSize}
		class="border-accent-500 border">
		{#each value.tileMap as row, y}
			{#each row as col, x}
				{#if col !== '#'}
					<GridTile
						onclick={tileclick}
						{x}
						{y}
						color={col === '#' ? '#1a170f' : '#ee82cf'}
						{col}
						{tileSize}></GridTile>
				{/if}
			{/each}
			<HeroTile onclick={tileclick} {hero} color="#450b26" col="@" {tileSize}
			></HeroTile>
		{/each}
	</Canvas>
{/if}
