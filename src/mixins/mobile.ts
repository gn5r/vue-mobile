import Vue from "vue";

export default Vue.mixin({
  created() {
    console.debug("Container mixin!")
  },
  computed: {
    containerStyle: {
      get () {
        const innerHeight = `${window.innerHeight}px`;
        return {
          height: `calc(${innerHeight} - 48px)`,
        }
      }
    }
  }
});