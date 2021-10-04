<template>
  <div>
    <v-tabs v-model="tab" icons-and-text center-active>
      <v-tabs-slider color="yellow" />
      <v-tab href="#home">
        Home
        <v-icon>mdi-home</v-icon>
      </v-tab>
      <v-tab href="#mention">
        Mention
        <v-icon>mdi-at</v-icon>
      </v-tab>
      <v-tab href="#notification">
        Notification
        <v-icon>mdi-bell</v-icon>
      </v-tab>
      <v-tab href="#search">
        Search
        <v-icon>mdi-text-box-search</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="home">
        <v-container fluid :style="containerStyle">
          <home />
        </v-container>
      </v-tab-item>
      <v-tab-item value="mention">
        <v-container fluid :style="containerStyle">
          <mention />
        </v-container>
      </v-tab-item>
      <v-tab-item value="notification">
        <v-container fluid :style="containerStyle">
          <notification />
        </v-container>
      </v-tab-item>
      <v-tab-item value="search">
        <v-container fluid :style="containerStyle">
          <search />
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "sample3-index",
  mixins: [],
  props: {},
  data: () => ({
    tab: "home",
  }),
  methods: {},
  created() {
    //
  },
  computed: {
    containerStyle: {
      get() {
        const innerHeight = `${window.innerHeight}px`;
        return {
          // ヘッダ - タブバー
          height: `calc(${innerHeight} - 48px - 72px)`,
        };
      },
    },
  },
  watch: {},
  components: {
    Home: () => import("@/views/sample2/contents/home.vue"),
    Mention: () => import("@/views/sample2/contents/mention.vue"),
    Notification: () => import("@/views/sample2/contents/notification.vue"),
    Search: () => import("@/views/sample2/contents/search.vue"),
  },
});
</script>

<style scoped>
</style>