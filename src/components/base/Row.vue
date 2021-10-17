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
    editable: {
      type: Boolean,
      default: false,
    },
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
      const classes = ["pa-0"];

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
