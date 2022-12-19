import express from 'express'
import { arts, deleteArt, findArt, updateArt } from '../models/art'
import { artCreationPayload } from '../dtos/art'
import { zodIdParams } from '../util/validation'

// Here I'm creating a "router"
// this is simply a container of multiple routes
// Roughly, a router = a controller
// (in this simple example)
const artsRouter = express.Router()

// Every urls are relative to the router.
// for example, in index.ts at the root,
// this router (Art) is bound to '/art',
// so binding router.get('/:id') will compile
// a full URL to '/art/:id'

// Not much to comment here,
// the router is (and should be) very simple.
// The core logic is rather inside the Models

// The controllers manipulate payloads,
// sometimes validate some params
// and simply calls the model

artsRouter.get('/', (req, res) => {
  res.json(arts)
})

artsRouter.get('/:id', (req, res) => {
  const { id: artId } = zodIdParams(req.params)

  const art = findArt(artId)

  res.json(art)
})

artsRouter.put('/:id', (req, res) => {
  const { id: artId } = zodIdParams(req.params)
  const artPayload = artCreationPayload(req.body)

  const oldArt = findArt(artId)
  const newArt = updateArt(oldArt, artPayload)

  res.json(newArt)
})

artsRouter.delete('/:id', (req, res) => {
  const { id: artId } = zodIdParams(req.params)

  const oldArt = findArt(artId)
  deleteArt(oldArt)

  res.json(oldArt)
})

export { artsRouter }
