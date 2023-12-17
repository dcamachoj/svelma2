<script>import { classnames } from "../../utils/classnames.js";
import ModalCardHead from "./ModalCardHead.svelte";
import ModalCardBody from "./ModalCardBody.svelte";
import ModalCardFoot from "./ModalCardFoot.svelte";
export let active;
export let classes = "";
$:
  cls = classnames("modal", { "is-active": active }, classes);
</script>

<div class={cls}>
	<div class="modal-background" />
	<div class="modal-card">
		<slot {ModalCardHead} {ModalCardBody} {ModalCardFoot} />
	</div>
</div>
