import axios from 'axios';
const baseURL = 'http://127.0.0.1:8000/api/v1/';

const host = axios.create({
  baseURL,
});

// Функция для отправки GET-запроса без блока try...catch
export function fetchData() {
  // Отправляем GET-запрос на сервер
  return host
    .get('users/')
    .then(response => {
      // Получаем данные из ответа
      const data = response.data;
      console.log('Response data:', data);
      return data; // Возвращаем полученные данные
    })
    .catch(error => {
      // Обрабатываем ошибки, если они возникли
      console.error('Error fetching data:', error);
      throw error; // Пробрасываем ошибку дальше, чтобы ее можно было обработать в вызывающем коде
    });
}
