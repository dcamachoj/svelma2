<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
$:
  cls = bulmaClassnames(bulma, ["hero-body"]);
</script>

<div class={cls}>
	<slot />
</div>
