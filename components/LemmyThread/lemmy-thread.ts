import { defineComponent, html } from "@tybalt/core";
import { compose, string, required, url } from "@tybalt/validator";

export default defineComponent({
  name: "lemmy-thread",
  shadowMode: "open",
  props: { postUrl: { validator: compose(string(), required(), url()) } },
  render({ postUrl }, ctx) {
    return html`<div class="lemmy-thread">fetching data for ${postUrl}</div>`;
  },
});
