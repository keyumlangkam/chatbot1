const express = require('express');
const app = express();

app.use('/', require('./routes/router'))

app.listen(3000, (req,res)=>{
  console.log('listening on port 3000')
})