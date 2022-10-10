import Vue from 'vue'
import VueRouter from 'vue-router'

import DashBoard from '@/views/DashBoard'
import GridSystem from '@/views/GridSystem'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/grid-system',
    name: 'GridSystem',
    component: GridSystem
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;













/*
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { VueWrapper } from '@vue/test-utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
*/