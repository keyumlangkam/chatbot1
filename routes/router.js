const express = require('express');

const router = express.Router()

router.get('/', (req,res)=>{
  res.send('hi')
})

router.get('/a', (req,res)=>{
  res.send('yo')
})

module.exports = router;