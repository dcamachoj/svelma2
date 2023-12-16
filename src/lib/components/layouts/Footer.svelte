<script lang="ts">
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper } from '$lib/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};

	$: cls = bulmaClassnames(bulma, ['footer']);
</script>

<footer class={cls}>
	<slot />
</footer>
