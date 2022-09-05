import { createRouter, createWebHistory } from 'vue-router';
import ViewShowcase from '@/views/ViewShowcase.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/trending',
            component: ViewShowcase,
        },
    ],
});

export default router;
