<template>
  <div>
    <a
      class="d-inline-block mb-8"
      :href="href"
      style="text-decoration: none"
      :target="targetFormatted"
      v-bind="attrs"
      v-on="listeners"
    >
      {{ href }}
    </a>
  </div>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "BaseLink",

  mixins: [mixin],

  props: {
    color: {
      type: String,
      default: "",
    },

    href: {
      type: String,
      default: "",
    },

    openInNewTab: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    styles() {
      return {
        color: this.color === "primary" ? null : this.color,
      };
    },

    targetFormatted() {
      return this.openInNewTab ? "_blank" : "_self";
    },
  },
};
</script>
