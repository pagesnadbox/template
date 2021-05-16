<template>
  <span v-if="!component.hidden && isString(component)"> {{ component }}</span>

  <component
    v-else-if="!component.hidden"
    :is="component.componentName"
    v-bind="component"
    :id="id"
  >
    <base-wrapper
      :key="i"
      v-for="(slot, i) in slots"
      :id="slot"
    />
  </component>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "BaseWrapper",
  props: {
    id: {
      type: String,
      default: "",
    },
  },

  computed: {
    ...mapGetters("config", ["getComponent"]),
    component() {
      return this.getComponent(this.id)
    },
    slots() {
      return this.component.slots || {};
    },
  },

  methods: {
    isString(value) {
      return typeof value === "string";
    },
  },

  created() {
    console.log(this, "created");
  },
};
</script>

<style></style>
