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
      this.$vuetify.goTo(`#${this.goTo}`);
    },
  },
};
</script>

<style></style>
