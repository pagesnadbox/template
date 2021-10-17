<template>
  <base-wrapper id="app" ref="app" />
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",

  computed: {
    ...mapState("engine", ["data"]),
  },

  created() {
    window.addEventListener("wheel", (e) => e.stopPropagation());
  },
};
</script>

<style>
.hightlight {
  outline: 2px solid rgb(19, 196, 219) !important;
  outline-offset: -0.075rem !important;
  /* transform: scale(1.03); */
  transition: transform 1.5s !important;
}

.name-tag {
  position: absolute;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.699);
  color: white;
  font-size: 0.85rem !important;
  padding: 4px;
  font-weight: 100 !important;
  font-family: unset;
  line-height: unset;
  top: -28px;
  left: 0;
}

.pb-default-component {
  position: relative !important;
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
