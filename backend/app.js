// SET PATH=C:\Program Files\Nodejs;%PATH%
const path = require("path");
const {chats} = require('./data/data')
const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')
const { dbconnect } = require("./config/dbconnection");
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes')
const http = require('http');
const socketIo = require('./config/socket')

const app = express();
dotenv.config()
 

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//server 

const server = http.createServer(app);
socketIo(server)

// Routes

const hrRoutes = require("./routes/hrRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
//start

app.use("/backend/hr", hrRoutes);
app.use("/backend/employee", employeeRoutes);


// chat  

app.use('/backend/chat',chatRoutes);
app.use('/backend/api/message', messageRoutes);

//

dbconnect();
const PORT = process.env.PORT || 8000;

server.listen(PORT,()=>console.log(`Server On Port ${PORT}`));

