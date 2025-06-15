require('dotenv').config()
import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/instagram',(req,res) => {
res.send('whattf_soham')
})

app.get ('/login',(req,res) => {
res.send('<h1> please login soham </h1>')
})

app.get('/youitube',(req,res) => {
res.send("<h2> night and backend </h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
