<template>
  <div class="base-avatar d-inline-flex" :style="mixinStyles" v-on="listeners">
    <v-avatar
      v-if="outlined"
      v-bind="attrs"
      :color="
        color || ($vuetify.theme.isDark ? 'grey darken-3' : 'grey lighten-4')
      "
      :size="outlineSize"
      :style="localStyles"
      class="base-avatar__outline"
      style="opacity: 0.4"
    />

    <v-avatar
      :color="color || ($vuetify.theme.isDark ? 'grey darken-4' : 'white')"
      :size="size"
      class="base-avatar__avatar"
      v-bind="attrs"
    >
      <base-icon
        v-if="icon"
        :id="ids.icon"
        :editable="editable"
        :dark="iconDark"
        :size="size / 2"
        :icon="icon"
      />
      <v-img v-else-if="src" :src="src" alt="Avatar Image"></v-img>
    </v-avatar>
  </div>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "BaseAvatar",

  inject: ["theme"],

  mixins: [mixin],

  props: {
    src: {
      type: String,
      default: "",
    },
    color: String,
    dark: Boolean,
    iconDark: null,
    icon: String,
    outlined: Boolean,
    size: {
      type: [Number, String],
      default: 56,
    },
  },

  data: () => ({
    multiply: 6,
  }),

  computed: {
    classes() {
      return [this.outlined && "base-avatar--outlined"];
    },
    isDark() {
      return this.theme.isDark || this.dark;
    },
    outlineSize() {
      return Number(this.size) + this.size / this.multiply;
    },
    localStyles() {
      const margin = this.size / (this.multiply * 2);

      return {
        // Aligns the outline content with the content
        margin: `-${margin}px 0 0 -${margin}px`,
      };
    },
    ids() {
      return {
        icon: `${this.$attrs.id}-icon`,
      };
    },
  },
};
</script>

<style lang="sass">
.base-avatar
  border-radius: 50%
  position: relative
  overflow: visible

  &__outline
    position: absolute !important
    left: 0
    top: 0

    &.base-avatar--outlined .base-avatar__avatar
      border-width: thin
      border-style: solid

  .theme--light .base-avatar--outlined .base-avatar__avatar
    border-color: rgba(0, 0, 0, .12) !important

  .theme--dark .base-avatar--outlined .base-avatar__avatar
    border-color: rgba(255, 255, 255, .12) !important
</style>
