<template>
  <div>
    <v-container fluid :style="containerStyle">
      <component :is="content" />
    </v-container>
    <v-bottom-navigation v-model="content" app>
      <v-btn value="home">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn value="mention">
        <span>Mention</span>
        <v-icon>mdi-at</v-icon>
      </v-btn>
      <v-btn value="notification">
        <span>Notification</span>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn value="search">
        <span>Search</span>
        <v-icon>mdi-text-box-search</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script lang="ts">
import Container from "@/mixins/mobile";

export default Container.extend({
  name: "",
  mixins: [],
  props: {},
  data: () => ({
    content: "home"
  }),
  methods: {},
  created() {
    //
  },
  computed: {
    containerStyle: {
      get () {
        const innerHeight = `${window.innerHeight}px`;
        return {
          // ヘッダ - ボトムナビ
          height: `calc(${innerHeight} - 48px - 56px)`,
        }
      }
    }
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