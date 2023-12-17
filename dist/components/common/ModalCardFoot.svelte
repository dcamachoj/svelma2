<script>import { createEventDispatcher } from "svelte";
import IconText from "./IconText.svelte";
const dispatch = createEventDispatcher();
export let actions = void 0;
function onAction(action) {
  return (e) => {
    dispatch("action", action);
  };
}
</script>

<footer class="modal-card-foot">
	{#if actions}
		{#each actions as action (action.name)}
			<button class="button" on:click={onAction(action)}>
				<IconText icon={action.icon} text={action.text} />
			</button>
		{/each}
	{/if}
	<slot />
</footer>
