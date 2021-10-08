import { mapState } from "vuex";
import mixin from "./mixin";

export default {
  mixins: [mixin],

  props: {
    dark: {
      type: Boolean,
      default: false
    },

    src: {
      type: String,
      default: ""
    },

    srcDark: {
      type: String,
      default: ""
    },

    height: {
      type: String,
      default: ""
    },

    border: {
      type: String,
      default: ""
    },

    borderRadius: {
      type: String,
      default: ""
    },

    mobileHeight: {
      type: String,
      default: ""
    }
  },

  computed: {
    ...mapState("settings", ["images"]),

    effectiveHeight() {
      return this.$vuetify.breakpoint.mdAndUp ? this.height : this.mobileHeight;
    },

    effectiveSource() {
      return this.$imageService ? this.$imageService.transformURL({ assetName: this.source }) : this.source
    },

    source() {
      const srcProp = "src";

      return (
        this.images[srcProp]?.url ||
        this.images[this.src]?.url ||
        this[srcProp] || this.src
      );
    }
  }
}