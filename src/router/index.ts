import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import HomeUnified from '../HomeUnified.vue';
import DetailedProjectVue from '../DetailedProject.vue';
import NotFound from '../NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeUnified
  },
  {
    path: '/pt',
    name: 'HomePt',
    component: HomeUnified
  },
  {
    path: '/home/:id',
    name: 'DetailedProject',
    component: DetailedProjectVue,
    props: true
  },
  {
    path: '/home-pt/:id',
    name: 'DetailedProjectPt',
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
