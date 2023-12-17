<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
export let type;
export let className = "";
export let size = void 0;
export let layout = "horizontal";
$:
  cls = bulmaClassnames(bulma, [
    "tile",
    `is-${type}`,
    className,
    {
      [`is-${size}`]: size != void 0,
      "is-vertical": layout == "vertical"
    }
  ]);
</script>

<div class={cls}>
	<slot />
</div>
