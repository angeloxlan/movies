import { createRouter, createWebHistory } from 'vue-router';
import ViewTrending from '@/views/ViewTrending.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/views/ViewNotFound.vue'),
            meta: { title: 'Not Found' },
        },
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
            meta: { title: 'Trending' },
        },
        {
            path: '/top-rated',
            name: 'topRated',
            component: () => import('@/views/ViewTopRated.vue'),
            meta: { title: 'Top Rated' },
        },
        {
            path: '/upcoming',
            name: 'upcoming',
            component: () => import('@/views/ViewUpcoming.vue'),
            meta: { title: 'Upcoming' },
        },
        {
            path: '/genre/:id',
            name: 'genre',
            component: () => import('@/views/ViewGenre.vue'),
            props: (route) => {
                id: parseInt(route.params.id);
            },
        },
        {
            path: '/movie/:id',
            name: 'movieDetail',
            component: () => import('@/views/ViewDetail.vue'),
            props: (route) => {
                id: parseInt(route.params.id);
            },
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('@/views/ViewSearch.vue'),
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
        ? `${to.meta.title} - ${import.meta.env.VITE_APP_TITLE}`
        : import.meta.env.VITE_APP_TITLE;
    next();
});

export default router;
