import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/home.vue'),
      meta: {
        home: true,
      },
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../pages/user.vue'),
      meta: {
        user: true,
      },
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../pages/message.vue'),
      meta: {
        message: true,
      },
    },
    {
      path: '/jobDetail',
      name: 'jobDetail',
      component: () => import('../pages/jobDetail.vue'),
      meta: {
        message: true,
      },
    },
  ],
});

export default router;