<script lang="ts">
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper } from '$lib/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let isRight: boolean = false;

	$: cls = bulmaClassnames(bulma, isRight ? 'level-right' : 'level-left');
</script>

<div class={cls}>
	<slot />
</div>
