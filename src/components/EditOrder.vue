<template>
  <div>
    <h2>Edit Order</h2>
    <form @submit.prevent="editOrder">
      <FormInput v-model="order.name" label="Order Name" />
      <FormInput v-model="order.description" label="Description" />
      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getOrderById, updateOrder } from '.services/api';
import FormInput from './FormInput.vue';

const order = ref({
  name: '',
  description: ''
});

const route = useRoute();

onMounted(async () => {
  try {
    order.value = await getOrderById(route.params.id);
  } catch (error) {
    console.error("Ошибка при загрузке заказа", error);
  }
});

const editOrder = async () => {
  try {
    await updateOrder(route.params.id, order.value);
    // Логика для успешного обновления
  } catch (error) {
    console.error("Ошибка при обновлении заказа", error);
  }
};
</script>
