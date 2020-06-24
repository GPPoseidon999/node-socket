var express = require('express')
var socket = require('socket.io')
var app = express()
app.use(express.static('public'))
var server = app.listen(4000, () => console.log('服务器正在4000端口号运行中.......'))
var io = socket(server)

io.on('connection', (socket) => {
    console.log('实现socket连接')
    console.log(socket.id)
})
