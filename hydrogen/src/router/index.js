import { createRouter, createWebHashHistory } from 'vue-router';
import EditView from '../views/EditView.vue';
import ScheduleView from '../views/ScheduleView.vue';

const routes = [
  {
    path: '/',
    name: 'Edit',
    component: EditView,
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: ScheduleView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
