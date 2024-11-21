<template>
  <div>
    <h1>Список заказов</h1>
    <ul>
      <li v-for="order in orders" :key="order.id">
        <router-link :to="'/orders/' + order.id">{{ order.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getOrders } from '../services/api';

const orders = ref([]);

onMounted(async () => {
  try {
    orders.value = await getOrders();
  } catch (error) {
    console.error('Ошибка при получении заказов', error);
  }
});
</script>
