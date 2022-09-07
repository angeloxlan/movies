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
    ],
});

export default router;
