const express = require ('express')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)

const io = socketIO(server)

let points = []

io.on('connection', socket => {
  console.log('Alguien se ha conectado :O');

  points.forEach( point => {
    socket.emit('point_added', point)
  })


  socket.on('add_point', point => {
    console.log('Alguien agrego un punto', point);
    points.push(point)
    io.sockets.emit('point_added', point)

  })

  socket.on('disconnect', () => {
    console.log('Alguien se ha ido');
  })
})

app.get('/', (req, res) => {
  res.send(new Date())
})

server.listen(4000, () => {
  console.log("Server listening on port 4000");
})