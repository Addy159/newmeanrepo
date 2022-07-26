const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

//connection to mongoDb database
mongoose.connect(process.env.DB_CONNECTION , ()=> {
    console.log('Connected to Db!');
})

app.use(express.json())

app.use(cors())

//get routes 
const routes = require('./routes/studentRoute')
app.use('/', routes)

//account routes
app.use('/', require('./routes/accounts'));

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})