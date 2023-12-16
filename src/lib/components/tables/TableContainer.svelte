<script lang="ts">
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper } from '$lib/utils/bulma.types.js';
	import Table from './Table.svelte';

	export let bulma: BulmaHelper = {};

	$: cls = bulmaClassnames(bulma, ['table-container']);
</script>

<div class={cls}>
	<slot {Table} />
</div>
