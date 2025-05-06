<script lang="ts">
	import './dungeon.scss'
	import Grid from './Grid.svelte'
	import Loading from './Loading.svelte'
	import CanvasRender from './CanvasRender.svelte'
	import {
		generateDungeon,
		sleep,
		randNum,
		type Room
	} from './dungeonGenerator'

	let showCanvas = $state(true)
	const toggle = () => {
		showCanvas = !showCanvas
	}

	let frame = $state({ w: 0, h: 0 })
	let cols = $state.raw(50)
	let rows = $state.raw(40)
	let scale = $state.raw(0.98)
	let maxH = $derived(`${Math.floor((frame.h / rows) * scale)}`)
	let maxW = $derived(`${Math.floor((frame.w / cols) * scale)}`)
	let options = $derived({ tileSize: Math.min(maxH, maxW), cols, rows })
	let gStyle = $derived(`--gg-gap: 1px; --gg-size: ${Math.min(maxH, maxW)}px;`)

	let grid: string[][] | null = $state()
	let hero = $state({ x: 0, y: 0 })
	let heroPos = $derived(
		`${hero.x.toString().padStart(2, '0')}|${hero.y.toString().padStart(2, '0')}`
	)
	let rooms: Room[] | null = $state()
	let freeCells: string[] = $state()

	const getDungeon = async () => {
		const data = generateDungeon(cols, rows)
		grid = data.tileMap
		freeCells = data.freeCells
		rooms = data.rooms
		const randId = randNum(0, rooms.length - 1)
		const { centerX, centerY } = rooms[randId]

		hero = { x: centerX, y: centerY }
		await sleep(1200)
		return data
	}
	const recreate = () => {
		promise = getDungeon()
	}

	let promise = $state(getDungeon())

	function canMove(a: GameObj, b: GameObj) {
		return !(a.x == b.x || a.y == b.y)
	}
	function handleKey(e: KeyboardEvent) {
		if (e.key === 'ArrowUp') movePlayer(0, -1)
		if (e.key === 'ArrowDown') movePlayer(0, 1)
		if (e.key === 'ArrowLeft') movePlayer(-1, 0)
		if (e.key === 'ArrowRight') movePlayer(1, 0)
	}

	function movePlayer(dx: number, dy: number) {
		const newX = hero.x + dx
		const newY = hero.y + dy
		if (grid[newY][newX] === '#') {
			return
		}
		if (grid[newY][newX] === 'x') {
			return
		}
		hero.x = newX
		hero.y = newY
		// console.log({ newX, newY })
	}
</script>

<section
	class="nwp page center"
	bind:clientWidth={frame.w}
	bind:clientHeight={frame.h}>
	<aside class="absolute top-4 right-4">
		<nav class="grid gap-2">
			<button onclick={recreate}>Create</button>
			<div class="flex items-center justify-between gap-2">
				<span>Rooms:</span>
				<span>{rooms.length}</span>
			</div>
			<div class="flex items-center justify-between gap-2">
				<span>Hero: </span>
				<span>{heroPos}</span>
			</div>
			<h4>Render</h4>

			<label class="flex items-center justify-between gap-2">
				<input type="checkbox" bind:checked={showCanvas} />
				<span>{showCanvas ? 'Canvas' : 'Dom'}</span>
			</label>
		</nav>
	</aside>

	{#await promise}
		<Loading></Loading>
	{:then value}
		{#if showCanvas}
			<CanvasRender {value} {gStyle} {hero} {...options}></CanvasRender>
		{:else}
			<Grid {value} {gStyle} {hero}></Grid>
		{/if}
	{:catch error}
		<div class="text-center text-red-600">
			<h2>Error</h2>
		</div>
	{/await}
</section>
<svelte:window onkeydown={handleKey} />
