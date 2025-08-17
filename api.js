const express = require('express');
const cors = require('cors'); // Импортируем пакет cors
const app = express();
const port = 8080;

// Настройка CORS для разрешения запросов с http://localhost:3001
const corsOptions = {
  origin: 'http://localhost:3000', // Разрешаем запросы только с этого домена
  optionsSuccessStatus: 200 // Некоторые старые браузеры требуют этого
};

app.use(cors(corsOptions)); // Используем middleware cors с настройками

// Данные пользователей (вместо базы данных, для примера)
const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 4, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 5, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 6, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 7, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 8, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 9, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 10, name: 'Jane Smith', email: 'jane.smith@example.com' },
];

// Маршрут для получения списка всех пользователей
app.get('/users', (req, res) => {
  res.json(users);
});

// Маршрут для получения пользователя по ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id); // Получаем ID из параметров запроса
  const user = users.find(u => u.id === userId); // Ищем пользователя по ID

  if (user) {
    res.json(user); // Отправляем найденного пользователя
  } else {
    res.status(404).json({ message: 'User not found' }); // Если пользователь не найден, возвращаем 404
  }
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
