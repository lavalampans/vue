import HomeView from '@/views/HomeView.vue';
import JobsView from '@/feature/job/JobsView.vue';
import JobView from '@/feature/job/JobView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: JobsView,
		},
		{
			path: '/jobs/:id',
			name: 'job',
			component: JobView
		},
		{
			path: '/:catchAll(.*)',
			name: 'NotFound',
			component: NotFoundView,
		},
	],
});

export default router;
