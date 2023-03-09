import { createRouter, createWebHistory } from 'vue-router';
import EventListView from '@/views/EventListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: () => import('@/views/EventDetailsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
});

export default router;
