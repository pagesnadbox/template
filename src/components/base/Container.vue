<template>
  <v-container v-bind="attrs" v-on="listeners">
    <slot />
  </v-container>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "BaseContainer",

  mixins: [mixin],
};
</script>

<style></style>
