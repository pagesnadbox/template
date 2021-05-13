<template>
  <v-navigation-drawer v-model="drawerModel" app>
    <div class="fill-height" v-bind="attrs" v-on="listeners">
      <slot></slot>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapState } from "vuex";
import mixin from "./mixin";

export default {
  name: "BaseDrawer",

  mixins: [mixin],

  computed: {
    ...mapState("appState", ["drawer"]),

    drawerModel: {
      get() {
        return this.drawer;
      },
      set(val) {
        this.setDrawerModel(val);
      },
    },
  },

  methods: {
    ...mapActions("appState", ["setDrawerModel"]),
  },
};
</script>

<style></style>
