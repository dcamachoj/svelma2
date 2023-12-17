<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
$:
  cls = bulmaClassnames(bulma, ["media"]);
</script>

<article class={cls}>
	<slot />
</article>
