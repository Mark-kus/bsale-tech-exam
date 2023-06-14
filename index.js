require('dotenv').config()
const express = require('express')
const server = express()
const cors = require('cors')

const getFlightPassengers = require('./getFlightPassengers.js');
const { PORT } = process.env
const port = PORT || 3000

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())

server.get('/flights/:id/passengers', getFlightPassengers)


server.listen(port, () => {
    console.log(`Listening at port ${port}`)
})