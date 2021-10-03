<template>
  <div>
    <v-app-bar app fixed dense :color="color">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items>
        <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
          <v-icon v-if="$vuetify.theme.dark">mdi-brightness-6</v-icon>
          <v-icon v-else>mdi-brightness-4</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" color="primary" link exact>
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { getItems } from "@/router"

export default Vue.extend({
  name: "",
  mixins: [],
  props: {
    title: String as PropType<string>,
    color: {
      type: String as PropType<string>,
      default: "primary",
    },
  },
  data() {
    const items = getItems()
    return {
      drawer: false,
      items
    };
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

<style scoped>
</style>