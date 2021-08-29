const express = require('express');
require('dotenv').config({path: __dirname + '/.env'})
const app = express();
const PORT = process.env.SERVER_PORT || 3000;
const characterRoute = require('./routes/charactersRoute.js')
app.use(express.static('./frontend/public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true}))

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

