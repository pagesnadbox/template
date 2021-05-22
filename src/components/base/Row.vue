<template>
  <v-row v-bind="attrs" v-on="listeners">
    <slot />
  </v-row>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "BaseRow",

  mixins: [mixin],

  props: {
    fillHeight: {
      type: Boolean,
      default: false,
    },
    preventWrap: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      const classes = [];

      if (this.fillHeight) {
        classes.push("fill-height");
      }

      if (this.preventWrap) {
        classes.push("flex-nowrap");
        classes.push("overflow-x-auto");
      }

      return classes;
    },
  },
};
</script>

<style></style>
