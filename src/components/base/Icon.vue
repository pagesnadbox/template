<template>
  <v-btn
    v-if="href"
    icon
    :href="href"
    :target="targetFormatted"
    v-on="listeners"
  >
    <v-icon :size="size" v-bind="attrs" :color="color">
      {{ icon || $slots.default }}
    </v-icon>
  </v-btn>
  <v-icon v-else :size="size" v-bind="attrs" v-on="listeners" :color="color">
    {{ icon || $slots.default }}
  </v-icon>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "BaseIcon",

  mixins: [mixin],

  props: {
    size: {
      type: [Number, String],
      default: 56,
    },

    icon: {
      type: String,
    },

    href: {
      type: String,
    },

    openInNewTab: {
      type: Boolean,
      default: false,
    },

    dark: null,
  },

  computed: {
    color() {
      const dark =
        this.dark === null || this.dark === undefined ? this.isDark : this.dark;

      return this.$attrs.color ?? (dark ? "#fff" : "#000");
    },

    targetFormatted() {
      return this.openInNewTab ? "_blank" : "_self";
    },
  },
};
</script>
