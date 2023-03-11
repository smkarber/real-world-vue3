import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '@/views/AboutView.vue';
import EventDetailsView from '@/views/EventDetailsView.vue';
import EventListView from '@/views/EventListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
});

export default router;
