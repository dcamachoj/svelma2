<script lang="ts">
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper, LabelSize } from '$lib/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let id: string;
	export let size: LabelSize | undefined = undefined;

	$: cls = bulmaClassnames(bulma, [
		'label',
		{
			[`is-${size}`]: size != undefined
		}
	]);
</script>

<label class={cls} for={id}>
	<slot />
</label>
