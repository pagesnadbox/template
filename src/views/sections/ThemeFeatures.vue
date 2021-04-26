<template>
  <base-section id="themeFeatures" v-bind="data">
    <base-section-heading
      id="themeFeatures-heading"
      v-bind="heading"
    />

    <base-list id="themeFeatures-list" v-bind="data.list" class="px-5">
      <template v-slot:item="{ item, i }">
        <base-avatar-card
          :id="`themeFeatures-list-items-${i}`"
          v-bind="item"
          :image="getImageData(item)"
          :text-dark="data.dark"
        />
      </template>
    </base-list>
  </base-section>
</template>

<script>  
import { mapState } from "vuex";
export default {
  name: "SectionThemeFeatures",

  computed: {
    ...mapState("themeFeatures", ["data"]),

    heading() {
      const dark = this.data.heading.dark ?? this.data.dark
      return {
        ...this.data.heading,
        color: this.data.heading.color || this.data.color,
        dark,
        textDark: dark
      };
    },

  },

  methods: {
    getImageData({ mobileHeight, height, src, srcDark }) {
      return {
        mobileHeight,
        height,
        src,
        srcDark
      };
    }
  }
};
</script>
