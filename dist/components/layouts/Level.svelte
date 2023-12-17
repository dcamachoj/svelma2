<script>import { bulmaClassnames } from "../../utils/bulma.js";
import LevelContainer from "./LevelContainer.svelte";
import LevelItem from "./LevelItem.svelte";
export let bulma = {};
export let isMobile = false;
$:
  cls = bulmaClassnames(bulma, [
    "level",
    {
      "is-mobile": isMobile
    }
  ]);
</script>

<nav class={cls}>
	<slot {LevelContainer} {LevelItem} />
</nav>
