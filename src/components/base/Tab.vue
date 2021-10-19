<template>
  <v-tab
    v-if="!$vuetify.breakpoint.mobile"
    @click="onClick"
    v-on="listeners"
    v-bind="attrs"
  >
    {{ text }}
  </v-tab>
  <v-list-item v-else v-on="listeners" v-bind="attrs" @click="onClick">
    {{ text }}
  </v-list-item>
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
