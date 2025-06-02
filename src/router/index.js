import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // 👇 Nueva ruta para el carrito
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'), // Lazy-loading
    },

    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    }
  ],
});

export default router;