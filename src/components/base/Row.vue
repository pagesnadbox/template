<template>
  <v-row v-bind="attrs" v-on="listeners" class="fill-height">
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
  },

  computed: {
    classes() {
      const classes = [];

      if (this.fillHeight) {
        classes.push("fill-height");
      }

      return classes;
    },
  },
};
</script>

<style></style>
