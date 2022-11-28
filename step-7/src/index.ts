import { data as artists } from './artists'
import { data as arts } from './arts'
import http from 'http'
import express from 'express'

var app = express();
var server = http.createServer(app);

app.set('json spaces', 2)

app.get('/artists', (req, res) => {
  res.json(artists)
})

const PORT = 1234
server.listen(PORT, () => {
  console.log(`Magic happens on port ${PORT}`)
})
