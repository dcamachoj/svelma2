<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
$:
  cls = bulmaClassnames(bulma, ["card-image"]);
</script>

<div class={cls}>
	<slot />
</div>
