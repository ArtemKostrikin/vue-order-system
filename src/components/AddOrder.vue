<template>
  <div>
    <h2>Add New Order</h2>
    <form @submit.prevent="addOrder">
      <FormInput v-model="order.name" label="Order Name" />
      <FormInput v-model="order.description" label="Description" />
      <button type="submit">Add Order</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { createOrder } from '../services/api';
import FormInput from './FormInput.vue';

const order = ref({
  name: '',
  description: ''
});

const addOrder = async () => {
  try {
    await createOrder(order.value);
    // Здесь можно добавить логику для очистки формы или уведомлений
  } catch (error) {
    console.error("Ошибка при добавлении заказа", error);
  }
};
</script>
