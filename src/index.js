const express = require('express');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use('/',require('./routes/webhook.js'))
app.get('/a',(req,res)=>{
  res.sendFile(path.join(__dirname,'b.html'))
})
app.listen('https://chatbot-c3995.web.app/',()=>{
  console.log(PORT)
})