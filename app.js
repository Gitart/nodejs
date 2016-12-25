var express = require('express');
var app = express();
var os = require('os');

// Установка шаблонизатора 
app.set('view engine', 'ejs');

// Установка папки для статических файлов
app.use(express.static('./public'));

// подключение маршрутов
var routes = require("./Routes.js");
routes(app);

console.log(os.uptime()/3600);

// запуск сервера
var port = 3000;
app.listen(port);
console.log('Server is launched on ...........................' + port + ' port');
