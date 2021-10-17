<template>
  <v-col v-bind="attrs" v-on="listeners">
    <slot />
  </v-col>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "BaseCol",

  mixins: [mixin],

  props: {
    editable: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return ["pa-2"];
    },
  },
};
</script>

<style></style>
