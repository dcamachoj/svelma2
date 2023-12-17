<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
export let isRight = false;
$:
  cls = bulmaClassnames(bulma, isRight ? "level-right" : "level-left");
</script>

<div class={cls}>
	<slot />
</div>
