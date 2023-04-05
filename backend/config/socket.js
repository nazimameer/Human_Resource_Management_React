const io = require("socket.io");

const socketIo = (server) => {
  const ioServer = io(server, {
    cors: {
      origin: ["http://localhost:3000"],
    },
  });


  ioServer.on('connection',(socket)=>{

    socket.on('send-message', (message, room)=>{
      if(room === ''){
        socket.broadcast.emit('recieve-message', message)
      }else{
        socket.broadcast.to(room).emit('recieve-message', message)
      }
   })

   socket.on('join-room',(room, cd)=>{
        socket.join(room)
        socket.emit("connected")
        cd(`joined :${room}`)
        console.log(`USER JOINED ROOM : ${room}`)
   })

  //  socket.on('disconnect', () => {
  // });
  })

  return ioServer;
};

module.exports = socketIo;
