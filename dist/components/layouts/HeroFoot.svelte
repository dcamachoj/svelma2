<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
$:
  cls = bulmaClassnames(bulma, ["hero-foot"]);
</script>

<div class={cls}>
	<slot />
</div>
