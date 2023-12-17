<script>import { bulmaClassnames } from "../../utils/bulma.js";
import { getFormatter } from "../../utils/format.js";
import { getNopUse } from "../../utils/validators.js";
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
const formatter = getFormatter();
export let bulma = {};
export let id;
export let value;
export let action = void 0;
export let step = void 0;
export let placeholder = void 0;
export let color = void 0;
export let size = void 0;
export let isRounded = false;
export let isHovered = false;
export let isFocused = false;
export let isStatic = false;
export let readonly = void 0;
export let disabled = false;
$:
  cls = bulmaClassnames(bulma, [
    "input",
    {
      [`is-${color}`]: color != void 0,
      [`is-${size}`]: size != void 0,
      "is-rounded": isRounded,
      "is-hovered": isHovered,
      "is-focused": isFocused,
      "is-static": isStatic
    }
  ]);
$:
  sValue = formatter.fromDate(value);
$:
  useAction = action?.use || getNopUse();
const handleInput = (e) => {
  const target = e.target;
  value = formatter.toDate(target.value);
  dispatch("value-changed", { name: id, value });
};
</script>

<input
	{id}
	name={id}
	type="date"
	class={cls}
	value={sValue}
	{placeholder}
	{disabled}
	{readonly}
	{step}
	on:input={handleInput}
	use:useAction={value}
/>
