import { createRouter, createWebHistory } from "vue-router";
import InicioView from "../views/InicioView.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: InicioView,
  },
  {
    path: "/favoritos",
    name: "favoritos",
    component: () => import("../views/Favoritos.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
