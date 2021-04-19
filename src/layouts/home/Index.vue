<template>
  <v-app>
    <home-app-bar />

    <home-view />

    <home-footer />
  </v-app>
</template>

<script>
import HomeAppBar from "@/layouts/home/AppBar";
import HomeFooter from "@/layouts/home/Footer";
import HomeView from "@/layouts/home/View";

export default {
  name: "HomeLayout",

  components: {
    HomeAppBar,
    HomeFooter,
    HomeView,
  }
};
</script>
