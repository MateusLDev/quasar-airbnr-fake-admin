import { RouteRecordRaw } from 'vue-router';
import RouterGuard from './routerGuard';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    beforeEnter: RouterGuard,
    component: () => import('../pages/Login.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        beforeEnter: RouterGuard,
        component: () => import('pages/MyHostingData.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
