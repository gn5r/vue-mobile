import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/index.vue"),
    meta: {
      icon: "mdi-home"
    }
  },
  {
    path: "/sample1",
    name: "Sample1",
    component: () => import("@/views/sample1/index.vue"),
    meta: {
      icon: "mdi-numeric-1-box-multiple-outline"
    }
  },
  {
    path: "/sample2",
    name: "Sample2",
    component: () => import("@/views/sample2/index.vue"),
    meta: {
      icon: "mdi-numeric-2-box-multiple-outline"
    }
  },
  {
    path: "/sample3",
    name: "Sample3",
    component: () => import("@/views/sample3/index.vue"),
    meta: {
      icon: "mdi-numeric-3-box-multiple-outline"
    }
  },
]

const router = new VueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE || "history",
  base: process.env.BASE_URL,
  routes
})

interface Navigation {
  title: string | undefined
  icon: string
  to: string
}

export function getItems(): Array<Navigation> {
  return routes.map(route => {
    const nav: Navigation = {
      title: route.name,
      icon: route.meta ? route.meta.icon : "mdi-vector-link",
      to: route.path
    }
    return nav
  })
}

export default router
