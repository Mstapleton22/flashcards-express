const express = require('express')
const app = express()
const port = 3000
// const methods = require('./methods.js')
// const cors = require('cors')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

// app.use(cors())

const db = require('./db');

app.get('/', (req, res) => {
  // db.select('*').from('methods')  this is the long way
  db('methods')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))