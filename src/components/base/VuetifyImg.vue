<template>
  <v-img v-bind="attrs" :height="effectiveHeight" :src="effectiveSource" v-on="listeners">
    <slot />
  </v-img>
</template>

<script>
import mixin from "./imgMixin";

export default {
  name: "BaseVuetifyImg",

  mixins: [mixin],
};
</script>
