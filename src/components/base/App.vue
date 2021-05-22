<template>
  <v-app v-bind="attrs" v-on="listeners">
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "BaseApp",

  mixins: [mixin],
};
</script>

<style></style>
