const express  = require('express')
const router = express.Router();
const models = require('../models/charactersModels.js')

router.post('/', (req, res, next) => {
  let { username, password } = req.body

})



module.exports = {
  router
}