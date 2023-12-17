<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let bulma = {};
export let href;
export let isButton = false;
$:
  cls = bulmaClassnames(bulma, ["panel-block"]);
</script>

{#if href}
	<a {href} class={cls}>
		<slot />
	</a>
{:else if isButton}
	<a href="/" class={cls} on:click|preventDefault>
		<slot />
	</a>
{:else}
	<div class={cls}>
		<slot />
	</div>
{/if}
