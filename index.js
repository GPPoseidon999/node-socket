var express = require('express')
var socket = require('socket.io')
var app = express()
app.use(express.static('public'))
var server = app.listen(4000, () => console.log('服务器正在4000端口号运行中.......'))
var io = socket(server)

io.on('connection', (socket) => {
    // 获取从客户端发送的数据
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
})
