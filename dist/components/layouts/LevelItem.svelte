<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
export let hasTextCentered = false;
$:
  cls = bulmaClassnames(bulma, [
    "level-item",
    {
      "has-text-centered": hasTextCentered
    }
  ]);
</script>

<div class={cls}>
	<slot />
</div>
