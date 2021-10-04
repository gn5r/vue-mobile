import Vue from "vue";

export default Vue.mixin({
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