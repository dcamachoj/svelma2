<script>import { bulmaClassnames } from "../../utils/bulma.js";
import Cardheader from "./Cardheader.svelte";
import CardContent from "./CardContent.svelte";
import CardFooter from "./CardFooter.svelte";
import CardImage from "./CardImage.svelte";
export let bulma = {};
$:
  cls = bulmaClassnames(bulma, ["card"]);
</script>

<div class={cls}>
	<slot {Cardheader} {CardContent} {CardFooter} {CardImage} />
</div>
