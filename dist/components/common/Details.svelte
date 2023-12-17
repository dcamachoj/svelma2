<script>import { bulmaClassnames } from "../../utils/bulma.js";
export let title;
export let value;
export let bulma = {};
export let bulmaTitle = {};
export let bulmaSubtitle = {};
export let underlined = false;
$:
  cls = bulmaClassnames(bulma, [
    "details full-width",
    {
      flexDir: "column",
      alignItems: "stretch",
      justifyContent: "flex-start",
      underlined
    }
  ]);
</script>

<div class={cls}>
	<p class="title {bulmaClassnames(bulmaTitle, { textSize: '5' })}">{title}</p>
	<p class="subtitle {bulmaClassnames(bulmaSubtitle, { textSize: '6' })}">{value}</p>
</div>

<style>
	.details.underlined {
		border-bottom: 1px solid black;
	}
	.title,
	.subtitle {
		text-align: left;
	}
</style>
