import { faker } from '@faker-js/faker'
import boom from '@hapi/boom'
import { ArtistCreationPayload, ArtistUpdatePayload } from '../dtos/artist'

// # SHAPE

export type Artist = {
  id: number
  firstName: string
  lastName: string
}

// # FAKE DATABASE

const generateArtist = (index: number): Artist => ({
  id: index + 1,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
})

let data = new Array(8).fill(null).map((v, i) => generateArtist(i))

// # MODEL METHODS

export const findArtist = (id: number) => {
  const artist = data.find((a) => a.id === id)

  if (artist == null) {
    throw boom.notFound('Artist not found', { id })
  }

  return artist
}

export const addArtist = (artistCreationPayload: ArtistCreationPayload) => {
  const nextArtistId = (data.at(-1)?.id ?? 0) + 1

  const artist: Artist = {
    id: nextArtistId,
    ...artistCreationPayload,
  }

  data = [...data, artist]

  return artist
}

export const updateArtist = (
  oldArtist: Artist,
  artistUpdatePayload: ArtistUpdatePayload,
) => {
  const artistIndex = data.indexOf(oldArtist)

  if (artistIndex === -1) {
    throw boom.notFound('Artist not found', { id: oldArtist.id })
  }

  const newArtist: Artist = {
    ...oldArtist,
    ...artistUpdatePayload,
  }

  data = [
    ...data.slice(0, artistIndex),
    newArtist,
    ...data.slice(artistIndex + 1),
  ]

  return newArtist
}

export const deleteArtist = (oldArtist: Artist) => {
  const artistIndex = data.indexOf(oldArtist)

  if (artistIndex === -1) {
    throw boom.notFound('Artist not found', { id: oldArtist.id })
  }

  data = [...data.slice(0, artistIndex), ...data.slice(artistIndex + 1)]

  return oldArtist
}

export { data as artists }
