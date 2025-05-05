<script lang="ts">
	const page = {
		heading: 'Nwp-Studio',
		body: 'Vite + Svelte + TypeScript + Tailwind'
	}
</script>

<div class="grid h-screen w-screen grid-rows-[auto_1fr_auto] overflow-hidden">
	<header class="bg-slate-600 p-1">BAR</header>
	<div
		class="grid grid-cols-1 grid-rows-[auto_1fr_auto] overflow-hidden md:grid-cols-[auto_1fr_auto] md:grid-rows-1">
		<aside class="relative overflow-hidden bg-slate-400 p-1">S1</aside>
		<main class="h-full w-full overflow-x-hidden overflow-y-auto bg-slate-200">
			<div class="p-4">
				<h1>{page.heading}</h1>
				<h4>{page.body}</h4>
				<div class="flex flex-col gap-2">
					<h1>Warten</h1>
					<p class="lead">Überspringt den Zug, ohne etwas zu tun</p>
					<h2>Angreifen</h2>
					<p class="lead">Greift ein benachbartes Ziel im Nahkampf an</p>
					<h3>Schießen</h3>
					<p class="lead">Führt einen Fernkampfangriff auf ein Ziel aus</p>
					<h2>Tür öffnen</h2>
					<p class="lead">Öffnet eine Tür in Reichweite</p>
					<h4>Tür schließen</h4>
					<p class="lead">Schließt eine geöffnete Tür</p>
					<h3>Aufheben</h3>
					<p class="lead">Hebt ein Item vom Boden auf</p>
					<h5>Item verwenden</h5>
					<p class="lead">Benutzt ein Item aus dem Inventar</p>
					<h1>Item ablegen</h1>
					<p class="lead">Lege ein Item auf den Boden</p>
					<h3>Ausrüsten</h3>
					<p class="lead">Rüste ein Item aus dem Inventar aus</p>
					<h4>Ablegen</h4>
					<p class="lead">Lege ein ausgerüstetes Item ab</p>
					<h5>Interagieren</h5>
					<p class="lead">Interagiert mit einem Objekt</p>
					<h6>Treppe runter</h6>
					<p class="lead">Steigt eine Ebene tiefer</p>
				</div>
			</div>
		</main>
		<aside class="relative overflow-hidden"></aside>
	</div>
	<footer class="bg-slate-600 p-1">FOO</footer>
</div>
