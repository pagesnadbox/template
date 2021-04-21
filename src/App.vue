<template>
  <Index />
</template>

<script>
import { mapActions, mapState } from "vuex";

import Index from "@/layouts/home/Index.vue";
import { EventBus, events } from './utils/eventBus';

export default {
  components: {
    Index,
  },

  name: "App",

  computed: {
    ...mapState("app", ["data"]),
  },

  watch: {
    "data.dark": {
      immediate: true,
      handler: "onDarkChange",
    },
    "data.primary": {
      immediate: true,
      handler: "onPrimaryColor",
    },
  },

  methods: {
    onDarkChange(value) {
      this.$vuetify.theme.dark = value;
    },
    onPrimaryColor(value) {
      EventBus.$emit(events.THEME_COLOR_CHANGE, { key: "primary_pagesandbox", value });
      this.$vuetify.theme.currentTheme.primary_pagesandbox = value;
    },
  },

  created() {
    window.addEventListener("wheel", (e) => e.stopPropagation());
  },
};
</script>

<style>
.hightlight {
  outline: 4px dotted rgb(19, 196, 219) !important;
  outline-offset: -0.075rem !important;
  /* transform: scale(1.03); */
  transition: transform 1.5s !important;
}
</style>

<style lang="sass">
.extra-padding
  padding-bottom: 96px !important
  padding-top: 96px !important

  @media screen and (max-width: 959px)
    padding-top: 48px !important
    padding-bottom: 48px !important
</style>
