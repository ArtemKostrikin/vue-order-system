<template>
  <div>
    <h1>Профиль пользователя</h1>
    <p>Имя: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>

    <!-- Кнопка "Назад" -->
    <button @click="goBack">Назад</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';  // Импортируем useRouter для навигации
import { getUserProfile } from '../services/api'; // Предполагаем, что сервис для профиля уже настроен

const user = ref({});
const router = useRouter();  // Инициализируем роутер

onMounted(async () => {
  try {
    user.value = await getUserProfile();
  } catch (error) {
    console.error('Ошибка загрузки профиля', error);
  }
});

// Функция для навигации назад
const goBack = () => {
  router.push('/');  // Можно изменить на '/orders', если хотите, чтобы переход был именно на страницу заказов
};
</script>

<style scoped>
button {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e535ab;
}
</style>
