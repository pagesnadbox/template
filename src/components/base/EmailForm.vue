<template>
  <form :action="action" :method="method" class="pa-0">
    <slot></slot>
  </form>
</template>

<script>
import mixin from "./mixin";

export default {
  mixins: [mixin],

  props: {
    action: {
      type: String,
      default: "",
    },

    method: {
      type: String,
      default: "",
    },
  },
};
</script>
