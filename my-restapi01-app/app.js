const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const body_parser = require('body-parser');
require('dotenv').config()

const PageRoutes = require('./routes/PageRoutes');
const memberRoutes = require('./routes/memberRoutes');

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(body_parser.json())
app.use(express.json())
app.use('/',PageRoutes)
app.use('/api',memberRoutes)

mongoose.connect('mongodb://localhost:27017/dti_test_db').then(
    ()=>{
        console.log("Database connected....");
    },
    (err)=>{
        console.log("Error : Database connection....");
    }
)

app.listen(PORT,()=>{
    console.log('Server running on port '+ PORT + ' ...');
})