import * as ROT from 'rot-js'
type Door = { x: number; y: number }
type Room = {
	x1: number
	y1: number
	x2: number
	y2: number
	centerX: number
	centerY: number
	roomId: number
	doors: Door[]
}

export function generateDungeon(width = 40, height = 20) {
	const digger = new ROT.Map.Digger(width, height)
	const tileMap: string[][] = Array.from({ length: height }, () =>
		Array(width).fill(' ')
	)
	const freeCells: string[] = []
	const corridors: string[] = []
	const rooms: Room[] = []

	const digCallback = (x, y, value) => {
		tileMap[y][x] = value ? '#' : '.'
		if (value) return
		const key = `${x},${y}`
		freeCells.push(key)
	}

	const createRooms = () => {
		digger.getRooms().forEach((room, roomId) => {
			const result = convertRoom(room)
			const [centerX, centerY] = room.getCenter()
			rooms.push({ ...result, centerX, centerY, roomId })
		})
	}
	const convertRoom = (r) => {
		const doors = Object.keys(r._doors).map((key) => {
			const [x, y] = key.split(',').map(Number)
			return { x, y }
		})

		doors.forEach(({ x, y }) => {
			// const key = `${x},${y}`
			tileMap[y][x] = 'D'
		})

		return {
			x1: r._x1,
			y1: r._y1,
			x2: r._x2,
			y2: r._y2,
			doors
		}
	}
	const createCorridors = () => {
		digger.getCorridors().forEach((corr, index) => {
			const { _startX, _startY, _endX, _endY } = corr
			for (let y = _startY; y <= _endY; y++) {
				for (let x = _startX; x <= _endX; x++) {
					const key = `${x},${y}`
					tileMap[y][x] = 'x'
					corridors.push(key)
				}
			}
		})
	}
	const generateBoxes = (freeCells) => {
		for (let i = 0; i < 10; i++) {
			const index = Math.floor(ROT.RNG.getUniform() * freeCells.length)
			const key = freeCells.splice(index, 1)[0]
			const [x, y] = key.split(',')
			tileMap[y][x] = '*'
		}
		// console.log(freeCells);
	}

	digger.create(digCallback)

	createRooms()
	createCorridors()
	generateBoxes(freeCells)

	return { rooms, freeCells, corridors, tileMap }
}

// Initialisierung beim Laden der Seite
// window.addEventListener('load', () => {
// 	const dungeon = new Dungeon()
// 	dungeon.init()
// })
