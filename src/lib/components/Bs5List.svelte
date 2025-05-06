<script>
	import { quintOut } from 'svelte/easing'
	import { crossfade } from 'svelte/transition'
	import { flip } from 'svelte/animate'
	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node)
			const transform = style.transform === 'none' ? '' : style.transform

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
				transform: ${transform} scale(${t});
				opacity: ${t}
			`
			}
		}
	})
	let { list, key, children, sort, listItemT, btnClick } = $props()

	let isOver = $state(false)
	const getDraggedParent = (node) =>
		node.dataset && node.dataset.index
			? node.dataset
			: getDraggedParent(node.parentNode)
	const start = (ev) => {
		ev.dataTransfer.setData('source', ev.target.dataset.index)
	}
	const over = (ev) => {
		ev.preventDefault()
		let dragged = getDraggedParent(ev.target)
		if (isOver !== dragged.id) isOver = JSON.parse(dragged.id)
	}
	const leave = (ev) => {
		let dragged = getDraggedParent(ev.target)
		if (isOver === dragged.id) isOver = false
	}
	const drop = (ev) => {
		isOver = false
		ev.preventDefault()
		let dragged = getDraggedParent(ev.target)
		let from = ev.dataTransfer.getData('source')
		let to = dragged.index
		reorder({
			from,
			to
		})
	}

	const getKey = (item) => (key ? item[key] : item)

	const reorder = ({ from, to }) => {
		let newList = [...list]
		newList[from] = [newList[to], (newList[to] = newList[from])][0]

		sort(newList)
	}
</script>

{#if list && list.length}
	<div class="list-group">
		{#each list as item, index (item.slug)}
			<button
				type="button"
				class="list-group-item list-group-item-action"
				data-index={index}
				data-id={item.slug}
				draggable="true"
				ondragstart={start}
				ondragover={over}
				ondragleave={leave}
				ondrop={drop}
				onclick={btnClick}
				in:receive={{ key: item.slug }}
				out:send={{ key: item.slug }}
				animate:flip={{ duration: 300 }}>
				{#if children}
					{@render children({ item, index })}
				{:else if listItemT}
					{@render listItemT(item, index)}
				{:else}
					<div class="text-4xl font-thin tabular-nums opacity-30">
						#{index + 1}
					</div>
					<div class="font-bold">
						{item.slug}
					</div>
				{/if}
			</button>
		{/each}
	</div>
{/if}
