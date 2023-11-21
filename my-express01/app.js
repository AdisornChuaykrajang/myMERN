const express = require('express');

const app = express()

app.get('/',(req, res)=>{
    res.send('<h1>Wee wee wee</h1>')
})

app.get('/hello',(req, res)=>{
    res.send('<h1>Hello....</h1>')
})

app.get('/thailand/welcome',(req, res)=>{
    res.send('<h1>Welcome....</h1>')
})

app.get('/hi',(req, res)=>{
    res.send('<h1>Hi....</h1>')
})

app.listen(3000, ()=>{
    console.log('Server running on port 3000....');
})