import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Home from '../Home.vue';
import DetailedProjectVue from '../DetailedProject.vue';
import NotFound from '../NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home/:id',
    name: 'DetailedProject',
    component: DetailedProjectVue,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
