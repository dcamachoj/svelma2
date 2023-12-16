<script lang="ts">
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper } from '$lib/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};

	$: cls = bulmaClassnames(bulma, ['hero-foot']);
</script>

<div class={cls}>
	<slot />
</div>
