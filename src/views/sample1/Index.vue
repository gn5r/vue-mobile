<template>
  <v-container class="pa-0" fluid :style="containerStyle">
    <v-row justify="center" align="start" no-gutters>
      <v-col cols="12">
        <v-carousel :show-arrows="false" height="100%">
          <v-carousel-item>
            <v-card width="100%" color="grey">
              <v-card-text></v-card-text>
              <v-card-actions class="justify-center">
                <v-icon>mdi-comment-text</v-icon>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
          <v-carousel-item>
            <v-card height="100%" width="100%" color="success"></v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Container from "@/mixins/mobile";

export default Container.extend({
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
</style>