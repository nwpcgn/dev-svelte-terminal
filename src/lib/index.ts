// place files you want to import through the `$lib` alias in this folder.
export { default as Sprites } from './icons/index.svelte'
export { default as TabBar } from './components/TabBar.svelte'
export const nav = [
	{
		name: 'Start',
		title: 'Landing',
		href: '/',
		icon: 'game-start',
		hidden: false
	},
	{
		name: 'Game',
		title: 'Roguelike',
		href: '/game',
		icon: 'game-hero',
		hidden: false
	},
	{
		name: 'Map',
		title: 'Dungeon',
		href: '/dungeon',
		icon: 'game-items',
		hidden: false
	},
	{
		name: 'Battle',
		title: 'Battle',
		href: '/battle1',
		icon: 'game-map1',
		hidden: false
	},
	{
		name: 'Settings',
		title: 'Options',
		href: '/settings',
		icon: 'game-settings',
		hidden: false
	}
]
export const subnav = [
	{
		name: 'Battle 1',
		href: '/game/1',
		icon: 'nwp-dice-1',
		hidden: false
	},
	{
		name: 'Battle 2',
		href: '/game/2',
		icon: 'nwp-dice-2',
		hidden: false
	},
	{
		name: 'Battle 3',
		href: '/game/3',
		icon: 'nwp-dice-3',
		hidden: false
	},
	{
		name: 'Battle 4',
		href: '/game/4',
		icon: 'nwp-dice-4',
		hidden: false
	}
]
