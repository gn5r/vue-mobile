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
              <v-card-text class="warning" style="height: 90%"></v-card-text>
              <v-divider />
              <v-card-actions class="justify-space-around" style="height: 10%">
                <v-btn icon>
                  <v-icon>mdi-home</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-at</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-bell</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-text-box-search</v-icon>
                </v-btn>
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
    return {};
  },
  methods: {},
  created() {
    //
  },
  computed: {},
  watch: {},
  components: {},
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