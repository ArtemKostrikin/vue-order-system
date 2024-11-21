import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';  // Пример URL

// Функция для получения заказов
export const getOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/todos`);  // Замена на фейковую сущность
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении заказов", error);
    throw error;
  }
};

// Функция для получения заказа по ID
export const getOrderById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении заказа", error);
    throw error;
  }
};

// Функция для создания нового заказа
export const createOrder = async (orderData: { name: string, description: string }) => {
  try {
    const response = await axios.post(`${API_URL}/todos`, orderData);
    return response.data;
  } catch (error) {
    console.error("Ошибка при создании заказа", error);
    throw error;
  }
};

// Функция для обновления заказа
export const updateOrder = async (id: string, orderData: { name: string, description: string }) => {
  try {
    const response = await axios.put(`${API_URL}/todos/${id}`, orderData);
    return response.data;
  } catch (error) {
    console.error("Ошибка при обновлении заказа", error);
    throw error;
  }
};

// Функция для удаления заказа
export const deleteOrder = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при удалении заказа", error);
    throw error;
  }
};

// Новая функция для получения профиля пользователя (примера)
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/1`);  // Пример API запроса
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении профиля", error);
    throw error;
  }
};
