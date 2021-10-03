<template>
  <v-app>
    <v-main>
      <header-bar title="vue-mobile" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderBar from "./components/common/HeaderBar.vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  }),
  components: {
    HeaderBar,
  },
});
</script>
<style lang="scss" scoped>
</style>