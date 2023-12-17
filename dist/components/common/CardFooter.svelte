<script>import { bulmaClassnames } from "../../utils/bulma.js";
import IconText from "./IconText.svelte";
export let bulma = {};
export let actions;
$:
  cls = bulmaClassnames(bulma, ["card-footer"]);
</script>

<footer class={cls}>
	{#each actions as action}
		{#if action.href}
			<a href={action.href} class="card-footer-item">
				<IconText icon={action.icon} text={action.text} />
			</a>
		{:else if action.click}
			<a href="/" class="card-footer-item" on:click|preventDefault={action.click}>
				<IconText icon={action.icon} text={action.text} />
			</a>
		{/if}
	{/each}
	<slot />
</footer>
