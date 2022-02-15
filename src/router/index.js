import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /* webpackChunkName: "about" */
    component: () => import("../views/About.vue"),
  },
  {
    path: "/manage-music",
    name: "Manage",
    meta: {
      requiresAuth: true,
    },
    // alias : "/manage",
    component: () => import("../views/Manage.vue"),
    beforeEnter: (_, _2, next) => {
      console.log("Manage Route Guard");
      next();
    },
  },
  {
    name: "Song",
    path: "/song/:id",
    component: () => import("../views/Song.vue"),
  },
  {
    path: "/manage",
    redirect: { name: "Manage" },
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, _2, next) => {
  console.log("Global Guard");

  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }
  if (store.state.userLoggedIn) {
    next();
  } else {
    next({ name: "Home" });
  }
});

export default router;
