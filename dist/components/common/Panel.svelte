<script>import { bulmaClassnames } from "../../utils/bulma.js";
import PanelBlock from "./PanelBlock.svelte";
import PanelCheckbox from "./PanelCheckbox.svelte";
import PanelHeading from "./PanelHeading.svelte";
import PanelIcon from "./PanelIcon.svelte";
import PanelTabs from "./PanelTabs.svelte";
export let bulma = {};
export let color = void 0;
$:
  cls = bulmaClassnames(bulma, [
    "panel",
    {
      [`is-${color}`]: color != void 0
    }
  ]);
</script>

<nav class={cls}>
	<slot {PanelHeading} {PanelBlock} {PanelCheckbox} {PanelIcon} {PanelTabs} />
</nav>
