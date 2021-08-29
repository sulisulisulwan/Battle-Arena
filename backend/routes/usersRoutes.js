const express = require('express');
const router = express.Router();
const models = require('../models/usersModels.js')

router.post('/', (req, res, next) => {
  let userData = req.body;

  if (userData.isCreateUser) {
    return models.createUser(userData)
      .then(result => {
        res.sendStatus(201)
      })
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  }
  return models.verifyUser(userData)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
});

module.exports = router;
