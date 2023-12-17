<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
export let size = void 0;
$:
  cls = bulmaClassnames(bulma, [
    "section",
    {
      [`is-${size}`]: size != void 0
    }
  ]);
</script>

<section class={cls}>
	<slot />
</section>
