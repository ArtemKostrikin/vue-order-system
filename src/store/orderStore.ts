// src/stores/orderStore.ts
import { defineStore } from 'pinia';

// Интерфейс для типа Order
interface Order {
  id: number;
  title: string;
  content: string;
}

export const useOrderStore = defineStore('orderStore', {
  state: () => ({
    orders: [] as Order[],  // Типизируем orders как массив объектов типа Order
  }),

  actions: {
    async fetchOrders() {
      try {
        const response = await fetch('https://api.example.com/orders');
        const data = await response.json();
        this.orders = data;
      } catch (error) {
        console.error('Ошибка при загрузке заказов:', error);
      }
    },

    // Добавляем тип Order для параметра order
    async addOrder(order: Order) {
      try {
        const response = await fetch('https://api.example.com/orders', {
          method: 'POST',
          body: JSON.stringify(order),
        });
        const data = await response.json();
        this.orders.push(data);
      } catch (error) {
        console.error('Ошибка при добавлении заказа:', error);
      }
    },
  },

  getters: {
    getOrders: (state) => state.orders,
  },
});
