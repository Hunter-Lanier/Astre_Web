// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RoadmapView from '../views/RoadmapView.vue'
import AuthView from '../views/AuthView.vue'
import ShopView from '../views/ShopView.vue'
import BlogView from '../views/BlogView.vue'
const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: '/auth', name: 'Auth', component: AuthView },
  { path: '/roadmap', name: 'roadmap', component: RoadmapView },
  { path: '/blog', name: 'blog', component: BlogView },
  // Add more routes as needed
  {
    path: '/login',
    redirect: '/auth'
  },
  {
    path: '/register',
    redirect: '/auth'
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
