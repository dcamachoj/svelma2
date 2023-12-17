<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
$:
  cls = bulmaClassnames(bulma, ["panel-heading"]);
</script>

<div class={cls}>
	<slot />
</div>
