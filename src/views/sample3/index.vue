<template>
  <v-card>
    <v-tabs-items v-model="tab">
      <v-tab-item value="home">
        <v-container fluid :style="containerStyle" >
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

    <v-divider />

    <v-card-actions class="pa-0">
      <v-tabs v-model="tab" icons-and-text centered center-active hide-slider>
        <v-tab href="#home">
          ホーム
          <v-icon>mdi-home</v-icon>
        </v-tab>
        <v-tab href="#mention">
          メンション
          <v-icon>mdi-at</v-icon>
        </v-tab>
        <v-tab href="#notification">
          通知
          <v-icon>mdi-bell</v-icon>
        </v-tab>
        <v-tab href="#search">
          検索
          <v-icon>mdi-text-box-search</v-icon>
        </v-tab>
      </v-tabs>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Mobile from "@/mixins/mobile.ts";

export default Mobile.extend({
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
        const innerHeight = `${this.innerHeight}px`;
        return {
          // ヘッダ - タブバー
          height: `calc(${innerHeight} - 48px - 56px)`,
          padding: "0px",
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

<style scoped lang="scss">
.v-tabs {
  height: 56px;
}
.v-tabs ::v-deep .v-tabs-bar {
  height: inherit;
}
.v-tab {
  padding: 0px;
  width: 48px;
}
.v-tabs ::v-deep .v-slider-group__prev,
.v-tabs ::v-deep .v-slider-group__next {
  display: none;
}
</style>