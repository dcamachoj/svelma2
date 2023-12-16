<script lang="ts">
	import type { ClsArgument } from '$lib/utils/classnames.js';
	import { bulmaClassnames } from '$lib/utils/bulma.js';
	import type { BulmaHelper } from '$lib/utils/bulma.types.js';
	import { icons } from './icons.js';

	export let icon: string;
	export let iconClass: string = 'icon';
	export let className: ClsArgument = '';
	export let helper: BulmaHelper = {};

	$: cls = bulmaClassnames(helper, [iconClass, className]);
	$: iconData = icon || icons.noImage;
</script>

<span class={cls}>
	<svg style="width:24px;height:24px" viewBox="0 0 24 24">
		<path fill="currentColor" d={iconData} />
	</svg>
</span>
