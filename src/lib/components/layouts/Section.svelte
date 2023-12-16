<script lang="ts">
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper, SectionSize } from '$lib/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let size: SectionSize | undefined = undefined;

	$: cls = bulmaClassnames(bulma, [
		'section',
		{
			[`is-${size}`]: size != undefined
		}
	]);
</script>

<section class={cls}>
	<slot />
</section>
