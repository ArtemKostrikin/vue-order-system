<template>
  <div>
    <h1>Детали заказа</h1>
    <p>ID: {{ order.id }}</p>
    <p>Название: {{ order.title }}</p>
    <p>Описание: 
      <span v-if="order.description">{{ order.description }}</span>
      <span v-else>Описание не указано</span>
    </p>

    <!-- Кнопка "Назад" -->
    <button class="back-button" @click="goBack">Назад</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getOrderById } from '../services/api';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const order = ref({});

onMounted(async () => {
  try {
    const orderId = route.params.id;
    order.value = await getOrderById(orderId);
  } catch (error) {
    console.error('Ошибка при получении заказа', error);
  }
});

// Функция для навигации назад
const goBack = () => {
  router.push('/orders');  // Возвращаем на страницу заказов
};
</script>
