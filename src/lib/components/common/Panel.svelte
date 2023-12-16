<script lang="ts">
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper, Colors } from '$lib/utils/bulma.types.js';
	import PanelBlock from './PanelBlock.svelte';
	import PanelCheckbox from './PanelCheckbox.svelte';
	import PanelHeading from './PanelHeading.svelte';
	import PanelIcon from './PanelIcon.svelte';
	import PanelTabs from './PanelTabs.svelte';

	export let bulma: BulmaHelper = {};
	export let color: Colors | undefined = undefined;

	$: cls = bulmaClassnames(bulma, [
		'panel',
		{
			[`is-${color}`]: color != undefined
		}
	]);
</script>

<nav class={cls}>
	<slot {PanelHeading} {PanelBlock} {PanelCheckbox} {PanelIcon} {PanelTabs} />
</nav>
