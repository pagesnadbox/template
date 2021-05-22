<template>
  <v-app-bar-nav-icon
    v-bind="attrs"
    v-on="listeners"
    @click="toggleDrawer"
  ></v-app-bar-nav-icon>
</template>

<script>
import { mapActions, mapState } from "vuex";
import mixin from "./mixin";

export default {
  name: "BaseDrawerButton",

  mixins: [mixin],

  computed: {
    ...mapState("appState", ["drawer"]),
  },

  methods: {
    ...mapActions("appState", ["setDrawerModel"]),
    toggleDrawer() {
      this.setDrawerModel(!this.drawer);
    },
  },
};
</script>

<style></style>
