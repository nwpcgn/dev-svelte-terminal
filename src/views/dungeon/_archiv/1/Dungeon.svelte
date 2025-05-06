<script lang="ts">
	import { onMount } from 'svelte'
	import { generateDungeon } from './dungeonGenerator'

	let op = $state({
		frameW: 0,
		frameH: 0,
		mapW: 50,
		mapH: 35
	})
	let gStyle = $derived(
		`--gg-gap: 1px; --gg-cols: ${op.mapW}; --gg-size: ${Math.floor((op.frameW / op.mapW) * 0.8)}px;`
	)
	let rogue = $state({})
	let grid: number[][] = $state()
	const atlas = {
		'0': 'wall',
		'1': 'floor',
		'9': 'door',
		'3': 'enemy',
		'4': 'obs',
		'5': 'player',
		'6': 'corridor',
		'10': 'room',
		'11': 'room'
	}

	$inspect(rogue)
	onMount(() => {
		const map = generateDungeon(op.mapW, op.mapH)
		grid = map?.tileMap
		rogue = map
	})
</script>

<section
	class="nwp page"
	bind:clientWidth={op.frameW}
	bind:clientHeight={op.frameH}>
	<div class="content">
		<div class="page-sector">
			<h4 class="text-center">Nwp-Studio</h4>

			<nav class="flex justify-center gap-2">
				<button>Button</button>
				<div>Rooms:</div>
			</nav>
		</div>
	</div>
	{#if grid}
		<div class="flex justify-center">
			<table class="rogue" style={gStyle}>
				{#each grid as row, y}
					<tr>
						{#each row as col, x}
							<td data-col={col} data-x={x} data-y={y}>
								<div>
									<span class={atlas[`${col}`]}
										><span class="sr-only">{col}</span></span>
								</div>
							</td>
						{/each}
					</tr>
				{/each}
			</table>
		</div>
	{/if}
</section>

<svelte:window />

<style lang="scss">
	table.rogue {
		margin: 0;
		padding: 0;

		td {
			margin: 0;
			padding: 0;
			border-width: var(--gg-gap);
		}
		div {
			overflow: hidden;
			width: var(--gg-size, 20px);
			aspect-ratio: 1/1;
			display: grid;
			grid-template-areas: 'stack';
			> * {
				grid-area: stack;
				display: grid;
				place-content: center;
			}
		}
		.floor {
			background-color: pink;
		}
		.wall {
			background-color: yellowgreen;
		}
		.room {
			background-color: var(--color-red-500);
		}
		.door {
			background-color: var(--color-blue-600);
		}
		.corridor {
			background-color: var(--color-amber-500);
		}
	}
</style>
