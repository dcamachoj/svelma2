<script lang="ts">
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper } from '$lib/utils/bulma.types.js';
	import Icon from './Icon.svelte';

	export let bulma: BulmaHelper = {};
	export let icon: string;

	$: cls = bulmaClassnames(bulma, ['panel-icon']);
</script>

<Icon {icon} iconClass={cls} />
