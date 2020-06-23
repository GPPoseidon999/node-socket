var express = require('express')

var app = express();

var  server = app.listen(4000, ()=> console.log('服务器正在4000端口号运行中.......'))

app.use(express.static('public'))