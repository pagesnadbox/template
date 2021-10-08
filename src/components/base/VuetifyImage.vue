<template>
  <v-img
    v-bind="attrs"
    :height="effectiveHeight"
    :src="effectiveSource"
    v-on="listeners"
  >
    <slot />
  </v-img>
</template>

<script>
import mixin from "./imgMixin";

export default {
  name: "BaseVuetifyImage",

  mixins: [mixin],

  computed: {
    styles() {
      const styles = {};

      styles.border = this.border;
      styles.borderRadius = this.borderRadius;

      return styles;
    },
  },
};
</script>
