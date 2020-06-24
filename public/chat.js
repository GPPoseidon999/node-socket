var socket = io.connect('http://localhost:4000')

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback')

btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value,
    })
})
