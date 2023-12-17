<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
$:
  cls = bulmaClassnames(bulma, "box");
</script>

<div class={cls}>
	<slot />
</div>
