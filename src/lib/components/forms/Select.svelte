<script lang="ts">
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper, Colors, InputSize, Option } from '$lib/utils/bulma.types.js';
	import { classnames } from '$lib/utils/classnames.js';
	import { createEventDispatcher } from 'svelte';
	import IconText from '../common/IconText.svelte';

	const dispatch = createEventDispatcher();

	export let bulma: BulmaHelper = {};
	export let id: string;
	export let options: Option[];
	export let value: string | Number;
	export let color: Colors | undefined = undefined;
	export let size: InputSize | undefined = undefined;
	export let disabled: boolean = false;
	export let isMultiple: boolean = false;
	export let isRounded: boolean = false;
	export let isHovered: boolean = false;
	export let isFocused: boolean = false;

	const handleInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		value = target.value;
		dispatch('value-changed', { name: id, value });
	};

	$: cls = bulmaClassnames(bulma, [
		'select',
		{
			'is-multiple': isMultiple,
			[`is-${color}`]: color != undefined,
			[`is-${size}`]: size != undefined,
			'is-rounded': isRounded
		}
	]);
	$: clsSelect = classnames({
		'is-hovered': isHovered,
		'is-focused': isFocused
	});
</script>

<div class={cls}>
	<select
		{id}
		name={id}
		class={clsSelect}
		{value}
		multiple={isMultiple}
		{disabled}
		on:change={handleInput}
	>
		{#each options as option}
			<option value={option.value}><IconText icon={option.icon} text={option.text} /></option>
		{/each}
	</select>
</div>
