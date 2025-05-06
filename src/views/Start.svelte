<script lang="ts">
	import { goto, route } from '@mateothegreat/svelte5-router'
	const title = 'Vite + Svelte + TypeScript + Tailwind'
</script>

<section class="nwp page">
	<div class="content">
		<div class="h-12"></div>
		<div class="page-sector">
			<h1 class="lead">Nwp-Studio</h1>
			<h3>{title}</h3>
			<nav>
				<button onclick={() => goto('/settings')}>Start</button>
			</nav>
		</div>
	</div>
</section>
