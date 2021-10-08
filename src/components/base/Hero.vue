<template>
  <div v-bind="attrs" v-on="listeners">
    <base-vuetify-image
      :dark="dark"
      :gradient="gradient"
      v-if="imagePosition === 'background'"
      :editable="false"
      :height="height"
      :mobileHeight="mobileHeight"
      :src="src"
    >
      <base-hero-content :editable="false" v-bind="$props">
        <slot></slot>
      </base-hero-content>
    </base-vuetify-image>

    <base-section
      :editable="false"
      :dark="dark"
      v-else
      :height="height"
      :mobileHeight="mobileHeight"
      :color="color"
    >
      <v-container class="fill-height">
        <v-row class="fill-height" justify="center" align="center">
          <v-col cols="12" md="6" v-if="imagePosition === 'left'">
            <base-vuetify-image
              :editable="false"
              max-height="100%"
              :src="src"
            ></base-vuetify-image>
          </v-col>
          <v-col cols="12" md="6">
            <base-hero-content :editable="false" v-bind="$props">
              <slot></slot>
            </base-hero-content>
          </v-col>
          <v-col cols="12" md="6" v-if="imagePosition === 'right'">
            <base-vuetify-image
              :editable="false"
              max-height="100%"
              :src="src"
            ></base-vuetify-image>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </div>
</template>

<script>
import mixin from "./mixin";

export default {
  mixins: [mixin],

  name: "BaseHero",

  props: {
    title: String,
    subtitle: String,
    color: String,
    gradient: String,

    dark: Boolean,

    height: {
      type: String,
      default: "",
    },

    mobileHeight: {
      type: String,
      default: "",
    },

    src: {
      type: String,
      default: "",
    },

    imagePosition: {
      type: String,
      default: "background",
    },
  },
};
</script>

<style>
</style>