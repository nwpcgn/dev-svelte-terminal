<script lang="ts">
	import { goto } from '@mateothegreat/svelte5-router'
	const nav = [
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
</script>

<div class="flex justify-center gap-2">
	{#each nav as { name, href, icon }}
		<button onclick={() => goto(href)}>{name}</button>
	{/each}
</div>

{#snippet iconT(name)}
	<svg class="nwp-icon"><use xlink:href="#{name}"></use></svg>
{/snippet}
