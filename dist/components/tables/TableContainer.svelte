<script>import { bulmaClassnames } from "../../utils/bulma.js";
import Table from "./Table.svelte";
export let bulma = {};
$:
  cls = bulmaClassnames(bulma, ["table-container"]);
</script>

<div class={cls}>
	<slot {Table} />
</div>
