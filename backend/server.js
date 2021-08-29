const express = require('express');
require('dotenv').config({path: __dirname + '/.env'})
const app = express();
const PORT = process.env.SERVER_PORT || 3000;
app.use(express.static('public'))
app.use(express.urlencoded)
app.use(express.json)

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

