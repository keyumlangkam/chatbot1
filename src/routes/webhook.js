const express = require('express');
const router = express.Router()
const path = require('path')
const processPostback = require('../config/postback');
const processMessage = require('../config/messages')

router.get('/', (req,res)=>{
  res.send('hi')
  console.log('hi')
  })

router.get('/a', (req,res)=>{
res.sendFile(path.join(__dirname,'b.html'))
console.log('hi')
})

router.post('/',(req,res)=>{
  if(req.body.object === 'page'){
    req.body.entry.forEach(function(entry){
      entry.messaging.forEach(function(event){
        console.log(event);
        if(event.postback){
          processPostback(event);
        } else if (event.message){
          processMessage(event)
        }
      });
    });
    res.sendStatus(200)
  }
})

module.exports = router