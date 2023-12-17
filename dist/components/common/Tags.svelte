<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
export let hasAddons = false;
$:
  cls = bulmaClassnames(bulma, [
    "tags",
    {
      "has-addons": hasAddons
    }
  ]);
</script>

<div class={cls}>
	<slot />
</div>
