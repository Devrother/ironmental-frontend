import Vue from 'vue';
import Router from 'vue-router';
import { interviewItemGuard } from './guard.js';
import HomeView from '../views/HomeView.vue';
import InterviewView from '../views/InterviewView.vue';
import OneInterviewView from '../views/OneInterviewView.vue';
import ConfirmView from '../views/ConfirmView.vue';
import ErrorView from '../views/ErrorView.vue';
import CancleView from '../views/CancleView.vue';

Vue.use(Router);

export const router = new Router({
	mode: 'history',

	routes: [
		{
			path: '/',
			redirect: '/home',
		},

		{
			path: '/home',
			name: 'home',
			component: HomeView,
		},

		{
			path: '/interviews',
			name: 'interviews',
			component: InterviewView,
		},

		{
			path: '/interviews/:id',
			name: 'interview',
			component: OneInterviewView,
			beforeEnter: interviewItemGuard,
		},

		{
			path: '/auth/confirm/:subscriberId',
			name: 'confirm',
			component: ConfirmView,
		},

		{
			path: '/subscribers/:subscriberId',
			name: 'cancleSub',
			component: CancleView,
		},

		{
			path: '*',
			name: 'notFound',
			component: ErrorView,
		},
	],
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
});
