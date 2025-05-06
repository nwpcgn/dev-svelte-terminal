<script lang="ts">
	let { value, gStyle, hero } = $props()
</script>

{#if value?.tileMap}
	<div class="border-accent-500 border">
		<table class="rogue" style={gStyle}>
			{#each value.tileMap as row, y}
				<tr>
					{#each row as col, x}
						<td data-col={col} data-x={x} data-y={y}>
							<div>
								{#if col === '#'}
									<div class="opacity-0">
										<span class="sr-only">{col}</span>
									</div>
								{:else if col === '.'}
									<div class="bg-accent-400">
										<span class="sr-only">{col}</span>
									</div>
								{:else if col === 'D'}
									<div class="bg-accent-600">
										<span class="sr-only">{col}</span>
									</div>
								{:else}
									<div class="text-accent-800 bg-accent-400">
										<span style="font-size: calc(var(--gg-size) * 0.6);"
											>{col}</span>
									</div>
								{/if}
								{#if hero.x === x && hero.y === y}
									<div class="player"></div>
								{/if}
							</div>
						</td>
					{/each}
				</tr>
			{/each}
		</table>
	</div>
{:else if value}
	<div class="flex justify-center">
		<pre>{JSON.stringify(value, null, 2)}</pre>
	</div>
{/if}
