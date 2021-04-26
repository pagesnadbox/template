<template>
  <v-icon :size="size" v-bind="attrs" v-on="listeners" :color="color">
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

    dark: null,
  },

  computed: {
    color() {
      const dark =
        this.dark === null || this.dark === undefined ? this.isDark : this.dark;

      return this.$attrs.color ?? (dark ? "#fff" : "#000");
    },
  },
};
</script>
