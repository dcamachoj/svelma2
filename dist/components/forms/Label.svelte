<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
export let id;
export let size = void 0;
$:
  cls = bulmaClassnames(bulma, [
    "label",
    {
      [`is-${size}`]: size != void 0
    }
  ]);
</script>

<label class={cls} for={id}>
	<slot />
</label>
