<script>import { bulmaClassnames } from "../../utils/bulma.js";
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
export let bulma = {};
export let id;
export let name;
export let checked;
export let disabled = false;
$:
  cls = bulmaClassnames(bulma, ["radio"]);
const handleInput = (e) => {
  const target = e.target;
  checked = target.checked;
  dispatch("value-changed", { name: id, value: checked });
};
</script>

<label class={cls}>
	<input type="radio" {id} {name} {checked} {disabled} on:change={handleInput} />
	<slot />
</label>
