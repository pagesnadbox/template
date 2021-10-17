<template>
  <v-sheet v-bind="attrs" :color="color" v-on="listeners" :max-width="maxWidth">
    <slot />
  </v-sheet>
</template>

<script>
// Components
import mixin from "./mixin";
import Heading from "@/mixins/heading";

export default {
  name: "BaseSection",

  mixins: [Heading, mixin],

  props: {
    space: {
      type: [Number, String],
      default: 0,
    },

    absolute: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
    },

    rounded: {
      type: String,
    },
  },

  computed: {
    styles() {
      const styles = {};

      if (this.absolute) {
        styles.position = "absolute";
        styles.top = "0";
        styles.left = "0";
        styles.right = "0";
        styles.bottom = "0";
      }

      return styles;
    },

    classes() {
      const classes = [];

      if (this.$attrs.elevation) {
        classes.push("overflow-hidden");
      }

      return classes;
    },
  },
};
</script>
