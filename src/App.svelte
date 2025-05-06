<script lang="ts">
	import { Sprites, TabBar, nav } from './lib'
	import {
		Router,
		route,
		type RouteConfig
	} from '@mateothegreat/svelte5-router'

	const routes: RouteConfig[] = [
		{
			path: '/',
			component: async () => import('./views/Start.svelte')
		},
		{
			path: '/game',
			component: async () => import('./views/game/Game.svelte')
		},
		{
			path: '/dungeon',
			component: async () => import('./views/dungeon/Dungeon.svelte')
		},
		{
			path: '/battle1',
			component: async () => import('./views/battle1/Battle.svelte')
		},
		{
			path: '/settings',
			component: async () => import('./views/dev/Test1.svelte')
		}
	]
</script>

<div class="grid h-screen w-screen grid-rows-[auto_1fr_auto] overflow-hidden">
	<header class="app-bar">
		<div class="content">
			<h1 class="headline">
				<a href="/" use:route style="color: inherit;">Terminal.css</a>
			</h1>
		</div>
	</header>
	<div
		class="grid grid-cols-1 grid-rows-[auto_1fr_auto] overflow-hidden md:grid-cols-[auto_1fr_auto] md:grid-rows-1">
		<aside class="relative overflow-hidden"></aside>
		<main class="main-content">
			<Router {routes}></Router>
		</main>
		<aside class="relative overflow-hidden"></aside>
	</div>
	<footer class="foo-bar">
		<div class="content">
			<TabBar></TabBar>
		</div>
	</footer>
</div>
