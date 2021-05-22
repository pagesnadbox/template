<template>
  <v-app-bar
    app
    id="home-app-bar"
    elevation="1"
    v-bind="attrs"
    v-on="listeners"
  >
    <slot />
  </v-app-bar>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "BaseAppBar",

  mixins: [mixin],
};
</script>
