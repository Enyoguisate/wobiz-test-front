import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: "/", redirect: "/signin" },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/Register.vue')
  },
  {
    path: "/:notFound(.*)",
    name: "http404",
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
