import * as ROT from 'rot-js'
type Door = { x: number; y: number }
export type Room = {
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
	generateBoxes(freeCells)

	return { rooms, freeCells, tileMap }
}

export const sleep = (milliseconds = 1000) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds))

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
export function shuffle(array) {
	let currentIndex = array.length
	let temporaryValue, randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array
}

export const randNum = (min = 0, max = 1) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min)) + min
}
