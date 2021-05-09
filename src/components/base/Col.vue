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
};
</script>

<style></style>
