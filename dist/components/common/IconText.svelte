<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let icon = "";
export let text = "";
export let className = "";
export let bulma = {};
export let block = false;
$:
  cls = bulmaClassnames(bulma, [className, { block }]);
$:
  clsIcon = bulmaClassnames(bulma, ["icon", className]);
</script>

{#if icon && !text}
	<span class={clsIcon}>
		<svg style="width:24px;height:24px" viewBox="0 0 24 24">
			<path fill="currentColor" d={icon} />
		</svg>
	</span>
{/if}
{#if text && !icon}
	<span>{text}</span>
{/if}
{#if icon && text}
	<span class="icon-text {cls}">
		<span class="icon">
			<svg style="width:24px;height:24px" viewBox="0 0 24 24">
				<path fill="currentColor" d={icon} />
			</svg>
		</span>
		<span>{text}</span>
	</span>
{/if}

<style>
	.icon-text.block {
		display: block;
	}
</style>
