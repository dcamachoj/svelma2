<script>import { bulmaClassnames } from "../../utils/bulma.js";
import Delete from "./Delete.svelte";
import IconText from "./IconText.svelte";
export let bulma = {};
export let icon = void 0;
export let text = void 0;
export let color = void 0;
export let size = void 0;
$:
  cls = bulmaClassnames(bulma, [
    "message",
    {
      [`is-${color}`]: color != void 0,
      [`is-${size}`]: size != void 0
    }
  ]);
</script>

<article class={cls}>
	{#if icon || text}
		<div class="message-header">
			<IconText {icon} {text} />
			<Delete on:click />
		</div>
	{/if}
	<div class="message-body">
		<slot />
	</div>
</article>
