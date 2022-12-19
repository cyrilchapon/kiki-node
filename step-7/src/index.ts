import http from 'http'
import express from 'express'

import { appEnv } from './util/env'
import { zodToBoom } from './util/validation'
import { handleBoom } from './util/boom'

import { artistsRouter } from './routes/artists'
import { artsRouter } from './routes/art'

const app = express()
const server = http.createServer(app)

if (appEnv.NODE_ENV !== 'production') {
  app.set('json spaces', 2)
}

app.use(express.json())

app.use('/artists', artistsRouter)
app.use('/arts', artsRouter)

app.use(zodToBoom)
app.use(handleBoom)

server.listen(appEnv.PORT, () => {
  console.log(`Magic happens on port ${appEnv.PORT}`)
})
