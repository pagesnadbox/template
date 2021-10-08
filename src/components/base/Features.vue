<template>
  <base-section :editable="false" v-bind="attrs" v-on="listeners">
    <v-container class="text-center py-15">
      <v-row class="fill-height" justify="center" align="center">
        <v-col v-if="title" cols="12" class="pb-10">
          <h2>{{ title }}</h2>
        </v-col>
        <v-col v-if="text" cols="12" sm="10">
          <div style="word-break: break-all; word-wrap: break-word">
            {{ text }}
          </div>
        </v-col>
        <v-col cols="12" class="pt-10">
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
import mixin from "./imgMixin";

export default {
  name: "BaseSectionWithHeading",

  mixins: [mixin],

  props: {
    icon: String,
    title: String,
    text: String,
  },
};
</script>

<style>
</style>