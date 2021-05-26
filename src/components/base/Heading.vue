<template>
  <component :is="tag" v-bind="attrs" v-on="listeners">
    <template v-if="title">
      {{ title }}
    </template>

    <slot v-else />
  </component>
</template>

<script>
import mixin from "./mixin";
import colorMixin from "./colorMixin";

export default {
  name: "BaseHeading",

  mixins: [mixin, colorMixin],

  inject: {
    theme: {
      default: () => ({ isDark: false }),
    },

    heading: {
      default: () => ({ align: "left" }),
    },
  },

  provide() {
    return {
      heading: {
        align: this.align,
      },
    };
  },

  props: {
    align: {
      type: String,
      default() {
        return this.heading.align;
      },
    },

    dense: {
      type: Boolean,
      default() {
        return this.isDense;
      },
    },

    size: {
      type: String,
      default: "",
    },

    mobileSize: {
      type: String,
      default: "",
    },

    mobileBreakpoint: {
      type: [Number, String],
      default: 768,
    },

    tag: {
      type: String,
      default: "h1",
    },

    title: String,

    weight: {
      type: String,
      default: "",
    },
  },

  computed: {
    classes() {
      const classes = [
        this.fontSize,
        `font-weight-${this.weight}`,
        `text-${this.align}`,
        this.theme.isDark && "white--text",
      ];

      return classes;
    },

    fontSize() {
      return this.$vuetify.breakpoint.width >= this.mobileBreakpoint
        ? this.size
        : this.mobileSize;
    },
  },
};
</script>
