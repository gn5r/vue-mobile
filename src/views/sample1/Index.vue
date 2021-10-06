<template>
  <v-container class="pa-0" fluid :style="containerStyle">
    <v-row justify="center" align="start" no-gutters>
      <v-col cols="12">
        <v-carousel :show-arrows="false" height="100%">
          <v-carousel-item>
            <v-card height="100%" width="100%">
              <v-card-text class="grey" style="height: 90%"></v-card-text>
              <v-divider />
              <v-card-actions class="justify-center" style="height: 10%">
                <v-icon>mdi-comment</v-icon>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
          <v-carousel-item>
            <v-card height="100%" width="100%">
              <v-card-text class="pa-0" style="height: 90%">
                <v-container fluid style="height: 100%">
                  <component :is="content" />
                </v-container>
              </v-card-text>
              <v-divider />
              <v-card-actions class="justify-space-around" style="height: 10%">
                <v-icon
                  :class="{ 'v-icon--active': content == 'home' ? true : false }"
                  color="primary"
                  @click="changeContent('home')"
                  >mdi-home</v-icon
                >
                <v-icon
                  :class="{ 'v-icon--active': content == 'mention' ? true : false }"
                  color="primary"
                  @click="changeContent('mention')"
                  >mdi-at</v-icon
                >
                <v-icon
                  :class="{ 'v-icon--active': content == 'notification' ? true : false }"
                  color="primary"
                  @click="changeContent('notification')"
                  >mdi-bell</v-icon
                >
                <v-icon
                  :class="{ 'v-icon--active': content == 'search' ? true : false }"
                  color="primary"
                  @click="changeContent('search')"
                  >mdi-text-box-search</v-icon
                >
              </v-card-actions>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Mobile from "@/mixins/mobile";

export default Mobile.extend({
  name: "sample1-index",
  mixins: [],
  props: {},
  data() {
    return {
      content: "home",
    };
  },
  methods: {
    changeContent(v: string) {
      this.content = v;
    },
  },
  created() {
    //
  },
  computed: {},
  watch: {},
  components: {
    Home: () => import("@/views/sample2/contents/home.vue"),
    Mention: () => import("@/views/sample2/contents/mention.vue"),
    Notification: () => import("@/views/sample2/contents/notification.vue"),
    Search: () => import("@/views/sample2/contents/search.vue"),
  },
});
</script>

<style lang="scss" scoped>
.container {
  .row {
    height: inherit;
    .col {
      height: inherit;
    }
  }
}
.v-carousel ::v-deep .v-carousel__item {
  height: calc(100% - 50px) !important;
}
.v-carousel ::v-deep .v-carousel__controls {
  position: fixed;
  bottom: 0px;
}
</style>