const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000


// Головна сторінка
app.get('/', (req, res) => {
  res.send('Hello World it is my first web server');
});

// Сторінка "Про студента"
app.get ('/about', (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, html) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error');
          }
          res.send (html);
    });
});


//Вивід зображення
app.use (express.static('image'));
app.get ('/png', (req, res) => {
    res.sendFile(__dirname + '/image/index.html');
});


// Обробка помилок
app.use((req, res) => {
  res.status(404).send('Сторінку не знайдено');
});

// Запуск сервера
app.listen(port, () => {
  console.log('Сервер запущено, порт - 3000');
});
