import * as ROT from 'rot-js'

export function generateDungeon(width = 40, height = 20) {
	const digger = new ROT.Map.Digger(width, height)
	const displayMap: string[][] = Array.from({ length: height }, () =>
		Array(width).fill(' ')
	)

	// Dungeon-Zellen setzen ('.' für Boden, '#' für Wand)
	digger.create((x, y, wall) => {
		displayMap[y][x] = wall ? '#' : '.'
	})

	// Räume extrahieren
	const rooms = []

	const drawDoor = (x, y) => {
		doors.push({ x, y })
	}

	digger.getRooms().forEach((room) => {
		const [centerX, centerY] = room.getCenter()
		rooms.push({
			x1: room.getLeft(),
			y1: room.getTop(),
			x2: room.getRight(),
			y2: room.getBottom(),
			centerX,
			centerY
		})
		room.getDoors(drawDoor)
	})

	// // Korridore sind '.'-Zellen, die **nicht** in einem Raum liegen
	// const roomArea = new Set<string>()
	// for (const r of rooms) {
	// 	for (let y = r.y1; y <= r.y2; y++) {
	// 		for (let x = r.x1; x <= r.x2; x++) {
	// 			roomArea.add(`${x},${y}`)
	// 		}
	// 	}
	// }
	// let areals = roomArea

	// const corridors: Corridor = []
	// for (let y = 0; y < height; y++) {
	// 	for (let x = 0; x < width; x++) {
	// 		if (displayMap[y][x] === '.' && !roomArea.has(`${x},${y}`)) {
	// 			corridors.push({ x, y })
	// 		}
	// 	}
	// }

	return { displayMap, rooms }
}
