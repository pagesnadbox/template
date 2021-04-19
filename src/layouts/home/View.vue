<template>
  <v-main>
    <v-fade-transition mode="out-in">
      <Index />
    </v-fade-transition>
  </v-main>
</template>

<script>
import Index from "@/views/home/Index.vue";

export default {
  name: "BaseView",
  components: {
    Index
  }
};
</script>
