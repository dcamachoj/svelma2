<script lang="ts">
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper } from '$lib/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let hasTextCentered: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'level-item',
		{
			'has-text-centered': hasTextCentered
		}
	]);
</script>

<div class={cls}>
	<slot />
</div>
