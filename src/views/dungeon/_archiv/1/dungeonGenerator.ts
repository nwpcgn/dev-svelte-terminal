import * as ROT from 'rot-js'

type CorrRaw = {
	_startX: number
	_startY: number
	_endX: number
	_endY: number
	_endsWithAWall: boolean
}

type DungeonResult = {
	tileMap: string[][]
	roomObj: Room[]
	corridors: { x: number; y: number }[]
}
type DunEl = {
	x: number
	y: number
	index: number
}

// Typ für das Originalobjekt room
type RoomRaw = {
	_x1: number
	_y1: number
	_x2: number
	_y2: number
	_doors: Record<string, number>
}

type Room = {
	x1: number
	y1: number
	x2: number
	y2: number
	doors: Door[]
}
type Door = { x: number; y: number }

// Konvertierungsfunktion: von r nach a

export function generateDungeon(width = 40, height = 20): DungeonResult {
	const atlas = {
		wall: 0,
		free: 1,
		door: 2,
		enemy: 3,
		obs: 4,
		player: 5,
		corridor: 6,
		room: 10
	}
	const digger = new ROT.Map.Digger(width, height)
	const tileMap: number[][] = getBlankMap(width, height)
	const roomMap: number[][] = getBlankMap(width, height)
	let rooms: DunEl[] = []
	let corridors: DunEl[] = []

	digger.create(mapCallback)

	function mapCallback(x: number, y: number, val: number) {
		tileMap[y][x] = val ? atlas.wall : atlas.free
	}

	function createRooms() {
		const roomArray: RoomRaw[] = digger.getRooms()

		roomArray.map((room, index) => {
			const { x1, y1, x2, y2, doors } = convertRoom(room)
			for (let y = y1; y <= y2; y++) {
				for (let x = x1; x <= x2; x++) {
					roomMap[y][x] = index + 10
					tileMap[y][x] = 11
				}
			}
			doors.forEach(({ x, y }) => {
				roomMap[y][x] = 9
				tileMap[y][x] = 9
			})
		})

		return roomArray
	}

	function createCorridors() {
		const corArray: CorrRaw[] = digger.getCorridors()
		console.log({ corr: corArray.length })
		corArray.forEach((corr, index) => {
			const { _startX, _startY, _endX, _endY } = corr
			for (let y = _startY; y <= _endY; y++) {
				for (let x = _startX; x <= _endX; x++) {
					tileMap[y][x] = 6
				}
			}
		})
		return corArray
	}

	function convertRoom(r: RoomRaw): Room {
		const doors: Door[] = Object.keys(r._doors).map((key) => {
			const [x, y] = key.split(',').map(Number)
			return { x, y }
		})

		return {
			x1: r._x1,
			y1: r._y1,
			x2: r._x2,
			y2: r._y2,
			doors
		}
	}

	function getBlankMap(width: number, height: number): number[][] {
		return Array.from({ length: height }, () => Array(width).fill(0))
	}

	corridors = createCorridors()
	rooms = createRooms().map((d) => convertRoom(d))

	return { tileMap, roomMap, rooms, corridors }
}
