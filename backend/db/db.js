const mysql = require('mysql2');
require('dotenv').config({path: '../.env'})

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DB,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  port: process.env.MYSQL_PORT
})



module.exports = {
  connection
}