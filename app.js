const express = require('express')
const asyncify = require('express-asyncify')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = asyncify(express())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const whitelist = [
  'http://localhost:3000',
  'http://localhost',
]

const corsOptions = {
  origin: whitelist,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  return res.json({
    data: {
      user: {
        firsname: 'felipe',
        lastname: 'acosta',
        email: 'me@felipeacosta.co',
        age: 31,
        address: 'St 42 7079 Laureles',
        phone: '+57 311 349 5655',
        country: 'COL',
        state: 'Antioquia',
        city: 'Medellin'
      }
    }
  })
})

module.exports = app