<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
export let size = void 0;
$:
  cls = bulmaClassnames(bulma, [
    "content",
    {
      [`is-${size}`]: size != void 0
    }
  ]);
</script>

<div class={cls}>
	<slot />
</div>
