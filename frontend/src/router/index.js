import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/Login.vue"),
    meta: { loggedIn: false },
  },
  {
    name: "home",
    path: "/",
    component: () => import("@/views/Home.vue"),
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;