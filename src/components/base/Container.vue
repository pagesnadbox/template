<template>
  <v-container v-bind="attrs" v-on="listeners">
    <slot />
  </v-container>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "BaseContainer",

  mixins: [mixin],

  props: {
    fillHeight: {
      type: Boolean,
      default: false,
    },
    editable: {
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
      return classes;
    },
  },
};
</script>

<style></style>
