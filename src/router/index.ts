import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { Routes } from "./routes";

const routes: Array<RouteRecordRaw> = Routes;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
