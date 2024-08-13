const express = require('express')

const serverless = require('serverless-http');

const app = express();

const router = express.Router()

router.get('/', (req,res)=>{
res.send('hi')
})

router.get('/a', (req,res)=>{
  res.send('yo')
  })
  

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)