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
    // console.log(message)
   })

   socket.on('setup',(hrid,userId, )=>{
        socket.join(hrid+userId)
        // console.log(hrid+userId);
        socket.emit("connected")
   })

   socket.on('join chat',(room)=>{
    socket.join(room);
    // console.log('User Joined Room : '+ room)
   })

   socket.on('disconnect', () => {
    // console.log(`Socket disconnected: ${socket.id}`);
  });
  })

  return ioServer;
};

module.exports = socketIo;
