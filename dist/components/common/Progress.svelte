<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
export let value;
export let max = 100;
export let indeterminate = false;
export let size = void 0;
export let color = void 0;
$:
  cls = bulmaClassnames(bulma, [
    "progress",
    {
      [`is-${size}`]: size != void 0,
      [`is-${color}`]: color != void 0
    }
  ]);
</script>

{#if !indeterminate}
	<progress class={cls} {value} {max}>
		<slot>
			{value.toFixed(0)}%
		</slot>
	</progress>
{:else}
	<progress class={cls}><slot /></progress>
{/if}
