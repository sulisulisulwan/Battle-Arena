const db = require('../db/db.js')

const verifyUser = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    let q = `SELECT * FROM User WHERE username = ? AND pw = ?;`;
    let v = [username, password];
    return db.connection.promise().execute(q, v)
      .then(result => {
        resolve(result)
      })
      .catch(err => {
        console.error(err)
        reject(err)
      })
  })
}

const createUser = ({ username, password }) => {
  return new Promise ((resolve, reject) => {
    let q = `INSERT INTO User (username, pw) VALUES (?, ?);`
    let v = [username, password];
    return db.connection.promise().execute(q, v)
      .then(results => {
        resolve(results)
      })
      .catch(err => {
        console.error(err)
        reject(err)
      })
  })
}

module.exports = {
  verifyUser,
  createUser
}