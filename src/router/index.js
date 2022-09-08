import { createRouter, createWebHistory } from 'vue-router';
import ViewTrending from '@/views/ViewTrending.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: {
                name: 'trending',
            },
        },
        {
            path: '/trending',
            name: 'trending',
            component: ViewTrending,
        },
        {
            path: '/top-rated',
            name: 'topRated',
            component: () => import('@/views/ViewTopRated.vue'),
        },
        {
            path: '/upcoming',
            name: 'upcoming',
            component: () => import('@/views/ViewUpcoming.vue'),
        },
    ],
});

export default router;
