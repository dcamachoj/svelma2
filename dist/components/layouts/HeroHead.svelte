<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
$:
  cls = bulmaClassnames(bulma, ["hero-head"]);
</script>

<div class={cls}>
	<slot />
</div>
