<template>
  <v-row v-bind="attrs" v-on="listeners" class="fill-height">
    <slot />
  </v-row>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "BaseRow",

  mixins: [mixin],
};
</script>

<style></style>
