<script>import { createEventDispatcher } from "svelte";
import { icons } from "../common/icons.js";
import ModalCard from "../common/ModalCard.svelte";
import Field from "../forms/Field.svelte";
import Label from "../forms/Label.svelte";
import Input from "../forms/Input.svelte";
import Button from "../common/Button.svelte";
const dispatch = createEventDispatcher();
export let id;
export let active;
export let header;
export let label;
export let value;
export let valid = void 0;
export let action = void 0;
export let okLabel = "Guardar";
export let okIcon = icons.save;
export let cancelText = "Cancelar";
export let cancelIcon = icons.cancel;
export let clrLabel = "";
export let clrIcon = icons.trash;
let loading = false;
$:
  if (active)
    onOpen();
$:
  isValid = valid == void 0 || valid.valid;
$:
  isDirty = valid == void 0 || valid.dirty;
$:
  message = valid?.message || "";
function onOpen() {
  loading = false;
}
function onClose() {
  active = false;
}
function onClear() {
  dispatch("clear", null);
}
function onSave() {
  if (!isValid || !isDirty)
    return;
  loading = true;
  dispatch("accept");
}
</script>

<ModalCard {active} let:ModalCardHead let:ModalCardFoot>
	<ModalCardHead {header} />
	<Field let:Control helpText={message} helpColor="danger">
		<Label {id}>{label}</Label>
		<Control>
			<Input type="number" {id} bind:value {action} />
		</Control>
	</Field>
	<ModalCardFoot>
		<Button
			{loading}
			disabled={!isValid || !isDirty}
			icon={okIcon}
			text={okLabel}
			color="primary"
			on:click={onSave}
		/>
		{#if clrLabel}
			<Button {loading} icon={clrIcon} text={clrLabel} color="info" on:click={onClear} />
		{/if}
		<Button {loading} icon={cancelIcon} text={cancelText} on:click={onClose} />
	</ModalCardFoot>
</ModalCard>
