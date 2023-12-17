<script>import { bulmaClassnames } from "../../utils/bulma.js";
import { createEventDispatcher } from "svelte";
import Icon from "../common/Icon.svelte";
const dispatch = createEventDispatcher();
export let bulma = {};
export let id;
export let value;
export let icon = void 0;
export let accept = void 0;
export let color = void 0;
export let size = void 0;
export let check = void 0;
export let align = "left";
export let hasName = false;
export let isRight = false;
export let isFullWidth = false;
export let isBoxed = false;
let elFile;
let file;
$:
  cls = bulmaClassnames(bulma, [
    "file",
    {
      "has-name": file && hasName,
      "is-right": isRight,
      "is-full-width": isFullWidth,
      "is-boxed": isBoxed,
      [`is-${color}`]: color != void 0,
      [`is-${size}`]: size != void 0,
      [`is-${align}`]: align != "left"
    }
  ]);
function onUpload() {
  const rd = new FileReader();
  rd.addEventListener("load", (e) => {
    const dataUrl = e.target?.result?.toString();
    if (!dataUrl)
      return;
    const fileItem = {
      filename: file.name,
      dataUrl,
      type: file.type,
      size: file.size
    };
    if (check != void 0 && !check(fileItem))
      return;
    dispatch("select", { fileItem, file });
  });
  rd.readAsDataURL(file);
}
function onChange() {
  file = elFile.files?.length ? elFile.files.item(0) : null;
  if (!file)
    return;
  onUpload();
}
</script>

<div class={cls}>
	<label class="file-label">
		<input
			class="file-input"
			type="file"
			{id}
			name={id}
			{accept}
			bind:value
			bind:this={elFile}
			on:change={onChange}
		/>
		<span class="file-cta">
			{#if icon}
				<Icon {icon} iconClass="file-icon" />
			{/if}
			<span class="file-label">
				<slot />
			</span>
		</span>
		{#if file && hasName}
			<span class="file-name">
				{file.name}
			</span>
		{/if}
	</label>
</div>
