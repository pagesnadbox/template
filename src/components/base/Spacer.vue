<template>
  <v-spacer v-on="listeners" v-bind="attrs"></v-spacer>
</template>

<script>
import mixin from "./mixin";
export default {
  mixins: [mixin],
};
</script>

<style></style>
