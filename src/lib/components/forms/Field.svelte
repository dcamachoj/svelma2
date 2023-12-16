<script lang="ts">
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper, Colors, FieldAlign } from '$lib/utils/bulma.types.js';
	import { classnames } from '$lib/utils/classnames.js';
	import Control from './Control.svelte';

	export let bulma: BulmaHelper = {};
	export let helpText: string | undefined = undefined;
	export let helpColor: Colors | undefined = undefined;
	export let addons: FieldAlign | undefined = undefined;
	export let grouped: FieldAlign | undefined = undefined;
	export let isGroupedMultiline: boolean = false;
	export let isHorizontal: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'field',
		{
			'has-addons': addons,
			[`has-addons-${addons}`]: addons && addons != 'left',
			'is-grouped': grouped,
			[`is-grouped-${grouped}`]: grouped && grouped != 'left',
			'is-grouped-multiline': grouped && isGroupedMultiline,
			'is-horizontal': isHorizontal
		}
	]);
	$: clsHelp = classnames('help', {
		[`is-${helpColor}`]: helpColor != undefined
	});
</script>

<div class={cls}>
	<slot {Control} />
	{#if helpText}
		<p class={clsHelp}>{helpText}</p>
	{/if}
</div>
