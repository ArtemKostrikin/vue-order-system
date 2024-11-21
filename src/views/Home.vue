<template>
  <div>
    <h1>Welcome to Order Tracker</h1>
    <OrderList />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import OrderList from '../views/OrderList.vue';
import { getOrders } from '../services/api';

const orders = ref([]);

onMounted(async () => {
  try {
    orders.value = await getOrders();
  } catch (error) {
    console.error("Ошибка загрузки заказов", error);
  }
});
</script>
