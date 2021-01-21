const express = require('express')
const app = express()

console.log("Starting Simple API")
 
app.get('/', function (req, res) {
  res.send({healthy: true})
})
 
app.listen(3000)