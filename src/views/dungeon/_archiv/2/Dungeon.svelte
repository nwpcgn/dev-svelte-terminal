<script lang="ts">
	import './dungeon.scss'
	import Loading from './Loading.svelte'
	import { generateDungeon } from './dungeonGenerator'
	import sleep from '../../lib/utils/sleep'
	let elem: HTMLDivElement | null = $state()
	let frame = $state({ w: 0, h: 0 })
	let cols = $state.raw(50)
	let rows = $state.raw(40)
	let scale = $state.raw(0.9)
	let maxH = $derived(`${Math.floor((frame.h / rows) * scale)}`)
	let maxW = $derived(`${Math.floor((frame.w / cols) * scale)}`)
	let gStyle = $derived(`--gg-gap: 1px; --gg-size: ${Math.min(maxH, maxW)}px;`)

	let grid: string[][] | null
	let game = $state({
		rooms: [],
		freeCells: []
	})

	const getDungeon = async () => {
		console.log('getD')
		const data = generateDungeon(cols, rows)
		grid = data.tileMap
		game.freeCells = data.freeCells
		game.rooms = data.rooms
		await sleep(1200)
		return data
	}
	const recreate = () => {
		promise = getDungeon()
	}

	let promise = $state(getDungeon())
</script>

<section
	class="nwp page center"
	bind:clientWidth={frame.w}
	bind:clientHeight={frame.h}>
	<aside class="absolute top-4 right-4">
		<nav class="grid gap-2">
			<button onclick={recreate}>Button</button>
			<div>
				<span>Rooms:</span>
				<span>{game?.rooms.length}</span>
			</div>
		</nav>
	</aside>

	{#await promise}
		<Loading></Loading>
	{:then value}
		{#if value?.tileMap}
			<div class="border-accent-500 border">
				<table class="rogue" style={gStyle}>
					{#each value.tileMap as row, y}
						<tr>
							{#each row as col, x}
								<td data-col={col} data-x={x} data-y={y}>
									{#if col === '#'}
										<div class="opacity-0">
											<span class="sr-only">{col}</span>
										</div>
									{:else if col === '.'}
										<div class="bg-accent-400">
											<span class="sr-only">{col}</span>
										</div>
									{:else if col === 'D'}
										<div class="bg-accent-600">
											<span class="sr-only">{col}</span>
										</div>
									{:else}
										<div class="bg-accent-400">
											<div class="text-accent-800">
												<span style="font-size: calc(var(--gg-size) * 0.6);"
													>{col}</span>
											</div>
										</div>
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</table>
			</div>
		{:else if value}
			<div class="flex justify-center">
				<pre>{JSON.stringify(value, null, 2)}</pre>
			</div>
		{/if}
	{:catch error}
		<div class="text-center">
			<h2>Error</h2>
		</div>
	{/await}
</section>
