<template>
  <span v-if="!component.hidden && isString(component)"> {{ component }}</span>

  <component
    v-else-if="!component.hidden"
    :is="component.componentName"
    v-bind="component"
    :id="id"
  >
    <base-wrapper
      :parentId="id"
      :key="i"
      v-for="(slot, i) in slots"
      :component="slot"
    />
  </component>
</template>

<script>
export default {
  name: "BaseWrapper",
  props: {
    component: {
      type: Object,
    },

    parentId: {
      type: String,
      default: "",
    },
  },

  computed: {
    slots() {
      return this.component.slots || {};
    },

    id() {
      if (this.parentId) {
        return `${this.parentId}-${this.component.key}`;
      }

      return this.component.key;
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
