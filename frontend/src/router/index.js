import { useGetCurrentUser } from "@/services";
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
    component: () => import("@/views/Dashboard.vue"),
  },
  {
    name: "quests",
    path: "/quests",
    component: () => import("@/views/Quest/Quests.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const currentUser = await useGetCurrentUser().catch(() => null);

  if (to.meta.loggedIn === false && currentUser) {
    return {
      name: "home",
    };
  }

  if (to.meta.loggedIn === true && !currentUser) {
    sessionStorage.removeItem("ara-app-token");
    return {
      name: "login",
    };
  }
});

export default router;