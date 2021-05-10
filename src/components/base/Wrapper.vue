<template>
  <span v-if="!component.hidden && isString(component)"> {{ component }}</span>

  <component v-else-if="!component.hidden" :is="component.componentName" v-bind="component">
    <base-wrapper :key="i" v-for="(slot, i) in slots" :component="slot" />
  </component>
</template>

<script>
export default {
  name: "BaseWrapper",
  props: ["component"],
  computed: {
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
