<template>
  <v-tab @click="onClick" v-on="listeners" v-bind="attrs">
    {{ text }}
  </v-tab>
</template>

<script>
import mixin from "./mixin";

export default {
  mixins: [mixin],

  props: {
    text: {
      type: String,
      default: "",
    },
    goTo: {
      type: String,
      default: "",
    },
  },

  methods: {
    onClick() {
      document.getElementById(this.goTo).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style></style>
