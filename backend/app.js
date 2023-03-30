// SET PATH=C:\Program Files\Nodejs;%PATH%
const path = require("path");
const {chats} = require('./data/data')
const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')
const { dbconnect } = require("./config/dbconnection");
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes')
const app = express();
dotenv.config()


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes

const hrRoutes = require("./routes/hrRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
//start

app.use("/hr", hrRoutes);
app.use("/employee", employeeRoutes);


// chat 

app.use('/api/chat',chatRoutes);
app.use('/api/message', messageRoutes);

//

dbconnect();
const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>console.log(`Server On Port ${PORT}`));
