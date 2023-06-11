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
        path: ":skill_id",
        children: [
          {
            name: "skill",
            path: "",
            component: () => import("@/views/Skill/Create.vue"),
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
                path: ":quest_id/requirements",
                children: [
                  {
                    name: "requirement_admin",
                    path: "create",
                    component: () => import("@/views/Skill/Quest/Requirement/Create.vue"),
                  },
                  {
                    name: "requirement_answer",
                    path: ":requirement/answer",
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
                name: "quest_update",
                path: "update/:quest_id",
                component: () => import("@/views/Skill/Quest/Create.vue"),
              },
              {
                name: "quest_view",
                path: ":quest_id",
                component: () => import("@/views/Skill/Quest/Quest.vue"),
              },

            ]
          },
        ]
      },
    ]
  },
  {
    name: "boxeIdeas",
    path: "/boxe_ideas",
    children: [
      {
        name: "boxeIdeas",
        path: "",
        component: () => import("@/views/BoxeIdea/List.vue"),
      },
    ]
  },
  {
    name: "users",
    path: "/users",
    children: [
      {
        name: "users",
        path: "",
        component: () => import("@/views/User/List.vue"),
      },
      {
        name: "user_create",
        path: "create",
        component: () => import("@/views/User/Create.vue"),
      },
      {
        name: "user_view",
        path: ":id",
        component: () => import("@/views/User/Profile.vue"),
      },
    ]
  },
  {
    name: "articles",
    path: "/articles",
    children: [
      {
        name: "articlesList",
        path: "",
        component: () => import("@/views/Articles/List.vue"),
      },
      {
        name: "article_create",
        path: "create",
        component: () => import("@/views/Articles/Create.vue"),
      },
      {
        name: "article_update",
        path: "update/:article_id",
        component: () => import("@/views/Articles/Create.vue"),
      },
      {
        name: "article_view",
        path: ":article_id",
        component: () => import("@/views/Articles/Article.vue"),
      },
    ]
  },
  {
    name: "settings",
    path: "/settings",
    component: () => import("@/views/Settings.vue")
  },
  {
    name: "surveys",
    path: "/surveys",
    children: [
      {
        name: "surveys",
        path: "",
        component: () => import("@/views/Survey/List.vue"),
      },
      {
        name: "survey_create",
        path: "create",
        component: () => import("@/views/Survey/Create.vue"),
      },
      {
        name: "survey_update",
        path: ":survey_id",
        component: () => import("@/views/Survey/Create.vue"),
      },
      {
        name: "survey_view",
        path: "view/:survey_id",
        component: () => import("@/views/Survey/View.vue"),
      },
    ]
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const currentUser = await useGetCurrentUser().catch(() => null);
  console.log(currentUser);
  if (to.meta.loggedIn === false && currentUser) {
    return {
      name: "home",
    };
  }

  if (to.meta.loggedIn === undefined && !currentUser) {
    sessionStorage.removeItem("ara-app-token");
    return {
      name: "login",
    };
  }
});

export default router;