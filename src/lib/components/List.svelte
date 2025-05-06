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

	// DRAG AND DROP
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
	let { list, key, children, sort } = $props()
	const reorder = ({ from, to }) => {
		let newList = [...list]
		newList[from] = [newList[to], (newList[to] = newList[from])][0]

		sort(newList)
	}
</script>

{#if list && list.length}
	<ul class="list bg-base-100 rounded-box shadow-md">
		{#each list as item, index (getKey(item))}
			<li
				data-index={index}
				data-id={JSON.stringify(getKey(item))}
				draggable="true"
				ondragstart={start}
				ondragover={over}
				ondragleave={leave}
				ondrop={drop}
				class="list-row items-center"
				in:receive={{ key: getKey(item) }}
				out:send={{ key: getKey(item) }}
				animate:flip={{ duration: 300 }}
				class:over={getKey(item) === isOver}>
				{#if children}
					{@render children({ item, index })}
				{:else}
					<div class="text-4xl font-thin tabular-nums opacity-30">
						0{index + 1}
					</div>
					<div class="font-bold">
						{getKey(item)}
					</div>
				{/if}
			</li>
		{/each}
	</ul>
{/if}
