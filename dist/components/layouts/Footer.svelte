<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
$:
  cls = bulmaClassnames(bulma, ["footer"]);
</script>

<footer class={cls}>
	<slot />
</footer>
