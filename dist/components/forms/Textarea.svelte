<script>import { bulmaClassnames } from "../../utils/bulma.js";
import { getNopUse } from "../../utils/validators.js";
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
export let bulma = {};
export let id;
export let value;
export let action = void 0;
export let rows = void 0;
export let placeholder = void 0;
export let disabled = false;
export let color = void 0;
export let size = void 0;
export let isRounded = false;
export let isHovered = false;
export let isFocused = false;
export let isStatic = false;
export let readonly = void 0;
export let hasFixedSize = false;
$:
  cls = bulmaClassnames(bulma, [
    "input",
    {
      [`is-${color}`]: color != void 0,
      [`is-${size}`]: size != void 0,
      "is-rounded": isRounded,
      "is-hovered": isHovered,
      "is-focused": isFocused,
      "is-static": isStatic,
      "has-fixed-size": hasFixedSize
    }
  ]);
$:
  useAction = action?.use || getNopUse();
const handleInput = (e) => {
  const target = e.target;
  value = target.value;
  dispatch("value-changed", { name: id, value });
};
</script>

<textarea
	{id}
	name={id}
	class={cls}
	{value}
	{placeholder}
	{readonly}
	{disabled}
	{rows}
	on:input={handleInput}
	use:useAction={value}
/>
