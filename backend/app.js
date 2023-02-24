// SET PATH=C:\Program Files\Nodejs;%PATH%
const path = require('path');
const express = require('express');
const cors = require('cors')
const { dbconnect } = require('./config/dbconnection');
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}))

// Routes

const hrRoutes = require('./routes/hrRoutes')

//start

app.use('/hr',hrRoutes)


dbconnect();

app.listen(8000);