// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'; // Импортируем Pinia
import './assets/styles/main.scss';

const app = createApp(App);

app
  .use(router)
  .use(createPinia()) // Используем Pinia вместо Vuex
  .mount('#app');
