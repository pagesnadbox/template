<template>
  <v-btn
    :color="color"
    :depressed="depressed"
    :min-width="minWidth"
    :tile="tile"
    class="font-weight-bold"
    v-bind="{ ...attrs, ...sizeObject }"
    :text="textOnly"
    :target="targetFormatted"
    :block="computedBlock"
    v-on="listeners"
  >
    <span v-if="text">{{ text }}</span>
    <slot v-else />

    <v-icon v-if="iconSrc" right>
      {{ iconSrc }}
    </v-icon>
  </v-btn>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "BaseBtn",

  mixins: [mixin],

  props: {
    href: {
      type: String,
      default: "",
    },

    iconSrc: {
      type: String,
      default: "",
    },

    color: {
      type: String,
      default: "primary",
    },

    depressed: {
      type: Boolean,
      default: false,
    },

    textOnly: {
      type: Boolean,
      default: false,
    },

    openInNewTab: {
      type: Boolean,
      default: false,
    },

    minWidth: {
      type: [Number, String],
      default: 64,
    },

    block: {
      type: Boolean,
      default: false,
    },

    blockOnMobile: {
      type: Boolean,
      default: false,
    },

    size: {
      type: String,
      default: "",
    },

    text: {
      type: String,
      default: "",
    },

    tile: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    sizeObject() {
      return {
        "x-small": this.size === "x-small",
        small: this.size === "small",
        normal: this.size === "normal",
        large: this.size === "large",
        "x-large": this.size === "x-large",
      };
    },

    computedBlock() {
      return (
        this.block || (this.$vuetify.breakpoint.mobile && this.blockOnMobile)
      );
    },

    targetFormatted() {
      return this.openInNewTab ? "_blank" : "_self";
    },
  },
};
</script>
