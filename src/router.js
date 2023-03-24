import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppDoctors from './pages/AppDoctors.vue';

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/doctors-search',
            name: 'doctors',
            component: AppDoctors
        },
    ]
});

export { router }
