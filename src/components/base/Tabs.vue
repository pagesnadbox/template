<template>
  <v-tabs v-on="listeners" v-bind="attrs">
    <slot></slot>
  </v-tabs>
</template>

<script>
import mixin from "./mixin";

export default {
  mixins: [mixin],
};
</script>

<style></style>
