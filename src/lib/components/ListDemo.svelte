<script>
	import SortableList from './Bs5List.svelte'
	let list = $state(['First Item', 'Second Item', 'Third Item'])
	const sortList = (arr) => {
		list = arr
	}
</script>

<section class="page-layer nwp">
	<article class="content">
		<SortableList {list} sort={sortList} />
	</article>
</section>
