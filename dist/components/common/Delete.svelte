<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
export let size = void 0;
$:
  cls = bulmaClassnames(bulma, [
    "delete",
    {
      [`is-${size}`]: size != void 0
    }
  ]);
</script>

<button class={cls} on:click />
