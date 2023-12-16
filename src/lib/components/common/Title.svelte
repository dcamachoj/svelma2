<script lang="ts">
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper } from '$lib/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let subtitle: boolean = false;
	export let size: TitleSize | undefined = undefined;

	$: cls = bulmaClassnames(bulma, [
		subtitle ? 'subtitle' : 'title',
		{
			[`is-${size}`]: size != undefined
		}
	]);
</script>

<p class={cls}>
	<slot />
</p>
