import axios from "axios";

// Функция для отправки GET-запроса без блока try...catch
function fetchData() {
  // Отправляем GET-запрос на сервер
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      // Получаем данные из ответа
      const data = response.data;
      console.log("Response data:", data);
      return data; // Возвращаем полученные данные
    })
    .catch((error) => {
      // Обрабатываем ошибки, если они возникли
      console.error("Error fetching data:", error);
      throw error; // Пробрасываем ошибку дальше, чтобы ее можно было обработать в вызывающем коде
    });
}

// Вызываем функцию для отправки GET-запроса
fetchData()
  .then((data) => {
    // Используем полученные данные
    console.log("Data received:", data);
  })
  .catch((error) => {
    // Обрабатываем ошибку, если она возникла при выполнении запроса
    console.error("Error:", error);
  });
