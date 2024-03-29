// SET PATH=C:\Program Files\Nodejs;%PATH%
const express = require("express");
const app = express();
const http = require('http');
const cors = require("cors");
const path = require("path");
const {chats} = require('./data/data')
const dotenv = require('dotenv')
const { dbconnect } = require("./config/dbconnection");
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes')
const { Server } = require('socket.io')

dotenv.config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// socket io 

const server = http.createServer(app);
const corsOptions = {
    origin: 'https://controlhub.online', // Adjust this to match your origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you need to send cookies or headers with credentials
  };
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://controlhub.online');
    // Add other CORS headers as needed
    next();
  });
app.use(cors(corsOptions));
//  
const io = new Server(server, {
    cors:{
        origin: "https://controlhub.online",
        methods:["GET", "POST"],
        credentials: true,
    },
});

io.on("connection", (socket)=>{
    console.log(`User Connected : ${socket.id}`);


    socket.on('join_room', (data)=>{
            socket.join(data);
            console.log(`User with id ${socket.id} is joined in room: ${data}`)
    });

    socket.on('send-message',(data)=>{
        socket.to(data.room).emit("recieve-message", data)
    })

    socket.on("disconnect", ()=>{
        console.log("User Disconnected", socket.id)
    })
}) 

//


// Routes

const hrRoutes = require("./routes/hrRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
//start

app.use("/hr", hrRoutes);
app.use("/employee", employeeRoutes);


// chat  

app.use('/chat',chatRoutes);
app.use('/api/message', messageRoutes);

//

dbconnect();
const PORT = process.env.PORT || 8000;

server.listen(PORT,()=>console.log(`Server On Port ${PORT}`));

