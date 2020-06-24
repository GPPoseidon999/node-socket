var socket = io.connect('http://localhost:4000')

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback')

btn.addEventListener('click', () => {
    // 客户端向服务端发送数据
    socket.emit('chat', {
        message: message.value,
        handle: handle.value,
    })
})

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value)
})

// 获取从服务器传过来的数据
socket.on('chat', (data) => {
    feedback.innerHTML = ''
    message.value = ''
    output.innerHTML += `<p><strong>${data.handle}:${data.message}</strong></p>`
})

// 获取从服务端广播的数据

socket.on('typing', (data) => {
    console.log(data)
    feedback.innerHTML = `<p><em>${data}正在输入......</em></p>`
})
