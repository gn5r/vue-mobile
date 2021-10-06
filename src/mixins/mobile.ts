import Vue from "vue";

export default Vue.extend({
  data: () => ({
    innerHeight: 0,
  }),
  mounted() {
    window.addEventListener("resize", this.handleInnerHeight)
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleInnerHeight)
  },
  created() {
    this.innerHeight = window.innerHeight;
  },
  methods: {
    handleInnerHeight() {
      this.innerHeight = window.innerHeight;
      console.debug(this.innerHeight)
    }
  },
  computed: {
    containerStyle: {
      get() {
        return {
          height: `calc(${this.innerHeight}px - 48px)`,
        };
      },
    },
  },
  watch: {},
});
