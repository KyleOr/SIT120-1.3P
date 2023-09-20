import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import PortfolioPage from '@/views/PortfolioPage.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      enterClass: 'animate__animated animate__fadeInLeft',
      leaveClass: 'animate__animated animate__fadeOutRight',
    },
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioPage,
    meta: {
      enterClass: 'animate__animated animate__fadeInRight',
      leaveClass: 'animate__animated animate__fadeOutLeft',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
