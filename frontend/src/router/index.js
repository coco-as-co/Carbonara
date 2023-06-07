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
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const currentUser = await useGetCurrentUser().catch(() => null);

  if (currentUser?.status === USER_STATUS.BANNED) {
    sessionStorage.removeItem("ara-app-token");
    return {
      name: "login",
    };
  }

  if (to.meta.loggedIn === false && currentUser) {
    return {
      name: "home",
    };
  }

  if (to.meta.authorize && !currentUser?.roles.some((r) => to.meta.authorize?.includes(r))) {
    return {
      name: "catchAll",
    };
  }

  if (to.meta.authorizeUpdateOwnProfil) {
    if (Number(to.params.id) !== currentUser?.id) {
      return {
        name: "catchAll",
      };
    }
  }
});

export default router;