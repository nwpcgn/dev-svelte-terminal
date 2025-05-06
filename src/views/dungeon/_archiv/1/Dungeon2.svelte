<script lang="ts">
	import * as ROT from 'rot-js'
	import { onMount } from 'svelte'

	let container: HTMLDivElement
	let display: ROT.Display
	let map: Record<string, string> = {}
	let engine: ROT.Engine
	let player: Player

	class Dungeon {
		init() {
			display = new ROT.Display()
			container.appendChild(display.getContainer())

			this.generateMap()

			const scheduler = new ROT.Scheduler.Simple()
			scheduler.add(player, true)

			engine = new ROT.Engine(scheduler)
			engine.start()
		}

		generateMap() {
			const digger = new ROT.Map.Digger()
			const freeCells: string[] = []

			digger.create((x, y, value) => {
				if (value) return
				const key = `${x},${y}`
				map[key] = '.'
				freeCells.push(key)
			})

			this.generateBoxes(freeCells)
			this.drawWholeMap()
			this.createPlayer(freeCells)
		}

		generateBoxes(freeCells: string[]) {
			for (let i = 0; i < 10; i++) {
				const index = Math.floor(ROT.RNG.getUniform() * freeCells.length)
				const key = freeCells.splice(index, 1)[0]
				map[key] = '*'
			}
		}

		drawWholeMap() {
			for (const key in map) {
				const [x, y] = key.split(',').map(Number)
				display.draw(x, y, map[key])
			}
		}

		createPlayer(freeCells: string[]) {
			const index = Math.floor(ROT.RNG.getUniform() * freeCells.length)
			const key = freeCells.splice(index, 1)[0]
			const [x, y] = key.split(',').map(Number)
			player = new Player(x, y)
		}
	}

	class Player {
		x: number
		y: number

		constructor(x: number, y: number) {
			this.x = x
			this.y = y
			this.draw()
		}

		act() {
			engine.lock()
			window.addEventListener('keydown', this)
		}

		handleEvent(e: KeyboardEvent) {
			const keyMap: Record<number, number> = {
				38: 0,
				33: 1,
				39: 2,
				34: 3,
				40: 4,
				35: 5,
				37: 6,
				36: 7
			}

			const code = e.keyCode
			if (!(code in keyMap)) return

			const dir = ROT.DIRS[8][keyMap[code]]
			const newX = this.x + dir[0]
			const newY = this.y + dir[1]
			const newKey = `${newX},${newY}`

			if (!(newKey in map)) return

			display.draw(this.x, this.y, map[`${this.x},${this.y}`])
			this.x = newX
			this.y = newY
			this.draw()

			window.removeEventListener('keydown', this)
			engine.unlock()
		}

		draw() {
			display.draw(this.x, this.y, '@', '#ff0')
		}
	}
	let dungeon = new Dungeon()
	// Lifecycle
	onMount(() => {
		dungeon.init()
	})
</script>

<section class="nwp page">
	<div class="content">
		<div class="h-12"></div>
		<div class="page-sector">
			<h1 class="lead">Nwp-Studio</h1>

			<nav>
				<button>Button</button>
			</nav>
		</div>
		<div>
			<div bind:this={container} class="dungeon-container" />
		</div>
	</div>
</section>
