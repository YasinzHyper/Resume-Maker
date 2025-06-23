require('dotenv').config()
import express from 'express';
const app =express()
const port = 4000
const bodyparser = require('bodyparser');
const cors = require('cors');
const Authrouter = require('./authrouter')
app.get('/login',(req,res) => {
res.send('login')
})

app.use(bodyparser.json());
app.use(cors());
app.use('./auth',Authrouter);

app.listen(process.env.PORT,() => {
console.log('${port}')
})
