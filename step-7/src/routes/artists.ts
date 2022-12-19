import express from 'express'
import {
  addArtist,
  artists,
  deleteArtist,
  findArtist,
  updateArtist,
} from '../models/artist'
import { addArtToArtist, listArtsOfArtist } from '../models/art'
import { zodIdParams } from '../util/validation'
import { artistCreationPayload, artistUpdatePayload } from '../dtos/artist'
import { artCreationPayload } from '../dtos/art'

const artistsRouter = express.Router()

artistsRouter.get('/', (req, res) => {
  res.json(artists)
})

artistsRouter.get('/:id', (req, res) => {
  const { id: artistId } = zodIdParams(req.params)

  const artist = findArtist(artistId)

  res.json(artist)
})

artistsRouter.post('/', (req, res) => {
  const artistPayload = artistCreationPayload(req.body)

  const artist = addArtist(artistPayload)

  res.json(artist)
})

artistsRouter.put('/:id', (req, res) => {
  const { id: artistId } = zodIdParams(req.params)
  const artistPayload = artistUpdatePayload(req.body)

  const oldArtist = findArtist(artistId)
  const newArtist = updateArtist(oldArtist, artistPayload)

  res.json(newArtist)
})

artistsRouter.delete('/:id', (req, res) => {
  const { id: artistId } = zodIdParams(req.params)

  const oldArtist = findArtist(artistId)
  deleteArtist(oldArtist)

  res.json(oldArtist)
})

artistsRouter.get('/:id/arts', (req, res) => {
  const { id: artistId } = zodIdParams(req.params)
  const artist = findArtist(artistId)

  const arts = listArtsOfArtist(artist)

  res.json(arts)
})

artistsRouter.post('/:id/arts', (req, res) => {
  const { id: artistId } = zodIdParams(req.params)
  const artist = findArtist(artistId)

  const artPayload = artCreationPayload(req.body)
  const art = addArtToArtist(artPayload, artist)

  res.json(art)
})

export { artistsRouter }
