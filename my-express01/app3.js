const express = require('express');
const routepages = require('./routes/routepages');

const app = express()


app.use('/', routepages)


app.listen(3000, ()=>{
    console.log('Server running on port 3000....');
})