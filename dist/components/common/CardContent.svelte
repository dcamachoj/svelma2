<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
$:
  cls = bulmaClassnames(bulma, ["card-content"]);
</script>

<div class={cls}>
	<slot />
</div>
