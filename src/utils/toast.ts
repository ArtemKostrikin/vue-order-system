// src/utils/toast.ts
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css'; // Подключаем стили Toastify

export function showToast(message: string, type: "success" | "error" = "success") {
  Toastify({
    text: message,
    backgroundColor: type === "success" ? "#4caf50" : "#f44336", // Цвет для success или error
    duration: 3000, // Продолжительность уведомления
    close: true,    // Кнопка закрытия
    gravity: "top", // Положение уведомления
    position: "right", // Положение уведомления
  }).showToast();
}
