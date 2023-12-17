<script>import { bulmaClassnames } from "../../utils/bulma.js";
import HeroBody from "./HeroBody.svelte";
import HeroFoot from "./HeroFoot.svelte";
import HeroHead from "./HeroHead.svelte";
export let bulma = {};
export let color = void 0;
export let size = void 0;
export let isFullHeightWithNavbar = false;
$:
  cls = bulmaClassnames(bulma, [
    "hero",
    {
      [`is-${color}`]: color != void 0,
      [`is-${size}`]: size != void 0,
      "is-fullheight-with-navbar": isFullHeightWithNavbar
    }
  ]);
</script>

<section class={cls}>
	<slot {HeroHead} {HeroBody} {HeroFoot} />
</section>
