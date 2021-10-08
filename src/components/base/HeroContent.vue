<template>
  <v-container class="fill-height">
    <v-row class="fill-height" justify="center" align="center">
      <v-col>
        <v-row>
          <v-col cols="12">
            <h1 class="text-h2">{{ title }}</h1>
          </v-col>
          <v-col cols="12">
            <h3>{{ subtitle }}</h3>
          </v-col>
          <v-col cols="12">
            <slot></slot>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mixin from "./mixin";

export default {
  mixins: [mixin],

  name: "BaseHero",

  props: {
    title: String,
    subtitle: String,

    dark: Boolean,
  },
};
</script>

<style>
</style>