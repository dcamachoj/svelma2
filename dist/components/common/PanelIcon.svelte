<script>import { bulmaClassnames } from "../../utils/bulma.js";
import Icon from "./Icon.svelte";
export let bulma = {};
export let icon;
$:
  cls = bulmaClassnames(bulma, ["panel-icon"]);
</script>

<Icon {icon} iconClass={cls} />
