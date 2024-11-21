import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import OrderList from '../views/OrderList.vue';
import OrderDetail from '../views/OrderDetails.vue';
import Profile from '../views/Profile.vue'; // Импортируем компонент профиля

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/orders',
    name: 'OrderList',
    component: OrderList,
  },
  {
    path: '/orders/:id',
    name: 'OrderDetail',
    component: OrderDetail,
    props: true,
  },
  {
    path: '/profile', // Новый маршрут для профиля
    name: 'Profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
