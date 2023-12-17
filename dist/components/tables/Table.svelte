<script>import { bulmaClassnames } from "../../utils/bulma.js";
import Row from "./Row.svelte";
export let bulma = {};
$:
  cls = bulmaClassnames(bulma, ["table"]);
</script>

<table class={cls}>
	<slot {Row} />
</table>
