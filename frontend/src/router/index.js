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
    children: [
      {
        path: "",
        component: () => import("@/views/Dashboard.vue"),
      }
    ]
  },
  {
    name: "skills",
    path: "/skills",
    children: [
      {
        name: "skills",
        path: "",
        component: () => import("@/views/Skill/List.vue"),
      },
      {
        name: "skill_create",
        path: "create",
        component: () => import("@/views/Skill/Create.vue"),
      },
      {
        name: "skill_view",
        path: ":id",
        children: [
          {
            name: "skill",
            path: "",
            component: () => import("@/views/Skill/Skill.vue"),
          },
          {
            name: "questsLayout",
            path: "quests",
            children: [
              {
                name: "quests",
                path: "",
                component: () => import("@/views/Skill/Quest/Quests.vue"),
              },
              {
                name: "requirement",
                path: ":id/:requirement",
                children: [
                  {
                    name: "requirement_admin",
                    path: "create",
                    component: () => import("@/views/Skill/Quest/Requirement/Create.vue"),
                  },
                  {
                    name: "requirement_answer",
                    path: "answer",
                    component: () => import("@/views/Skill/Quest/Requirement/Question.vue"),
                  }
                ]
              },
              {
                name: "quest_create",
                path: "create",
                component: () => import("@/views/Skill/Quest/Create.vue"),
              },
              {
                name: "quest_view",
                path: ":id",
                component: () => import("@/views/Skill/Quest/Quest.vue"),
              },

            ]
          },
        ]
      },

    ]
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