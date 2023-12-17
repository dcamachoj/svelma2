<script>import { bulmaClassnames } from "../../utils/bulma.js";
import { classnames } from "../../utils/classnames.js";
import { createEventDispatcher } from "svelte";
import IconText from "../common/IconText.svelte";
const dispatch = createEventDispatcher();
export let bulma = {};
export let id;
export let options;
export let value;
export let color = void 0;
export let size = void 0;
export let disabled = false;
export let isMultiple = false;
export let isRounded = false;
export let isHovered = false;
export let isFocused = false;
const handleInput = (e) => {
  const target = e.target;
  value = target.value;
  dispatch("value-changed", { name: id, value });
};
$:
  cls = bulmaClassnames(bulma, [
    "select",
    {
      "is-multiple": isMultiple,
      [`is-${color}`]: color != void 0,
      [`is-${size}`]: size != void 0,
      "is-rounded": isRounded
    }
  ]);
$:
  clsSelect = classnames({
    "is-hovered": isHovered,
    "is-focused": isFocused
  });
</script>

<div class={cls}>
	<select
		{id}
		name={id}
		class={clsSelect}
		{value}
		multiple={isMultiple}
		{disabled}
		on:change={handleInput}
	>
		{#each options as option}
			<option value={option.value}><IconText icon={option.icon} text={option.text} /></option>
		{/each}
	</select>
</div>
