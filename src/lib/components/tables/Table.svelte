<script lang="ts">
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper } from '$lib/utils/bulma.types.js';
	import Row from './Row.svelte';

	export let bulma: BulmaHelper = {};

	$: cls = bulmaClassnames(bulma, ['table']);
</script>

<table class={cls}>
	<slot {Row} />
</table>
