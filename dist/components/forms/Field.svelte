<script>import { bulmaClassnames } from "../../utils/bulma.js";
import { classnames } from "../../utils/classnames.js";
import Control from "./Control.svelte";
export let bulma = {};
export let helpText = void 0;
export let helpColor = void 0;
export let addons = void 0;
export let grouped = void 0;
export let isGroupedMultiline = false;
export let isHorizontal = false;
$:
  cls = bulmaClassnames(bulma, [
    "field",
    {
      "has-addons": addons,
      [`has-addons-${addons}`]: addons && addons != "left",
      "is-grouped": grouped,
      [`is-grouped-${grouped}`]: grouped && grouped != "left",
      "is-grouped-multiline": grouped && isGroupedMultiline,
      "is-horizontal": isHorizontal
    }
  ]);
$:
  clsHelp = classnames("help", {
    [`is-${helpColor}`]: helpColor != void 0
  });
</script>

<div class={cls}>
	<slot {Control} />
	{#if helpText}
		<p class={clsHelp}>{helpText}</p>
	{/if}
</div>
