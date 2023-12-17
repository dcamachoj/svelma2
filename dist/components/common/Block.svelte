<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
$:
  cls = bulmaClassnames(bulma, "block");
</script>

<div class={cls}>
	<slot />
</div>
