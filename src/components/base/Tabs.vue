<template>
  <v-tabs
    v-if="!$vuetify.breakpoint.mobile"
    v-on="listeners"
    v-bind="attrs"
    background-color="transparent"
  >
    <slot></slot>
  </v-tabs>

  <div v-else v-on="listeners" v-bind="attrs">
    <v-menu bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on"> mdi-menu </v-icon>
      </template>

      <v-list class="grey lighten-3">
        <slot></slot>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import mixin from "./mixin";

export default {
  mixins: [mixin],
};
</script>

<style></style>
