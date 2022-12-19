import { faker } from '@faker-js/faker'
import boom from '@hapi/boom'
import { Artist, artists } from './artist'
import { ArtCreationPayload, ArtUpdatePayload } from '../dtos/art'

// # -----------------------------------------------------------
// # INTRODUCTION

// A "Model" is the database representation of an object.
// It's generally composed of a type (it's "shape")
// and some methods provided to "manipulate" the database
// (create, modify, delete, etc.)

// # -----------------------------------------------------------
// # SHAPE

// This is what an Art looks like in its common shape
// the base type of an Art, expressed in typescript
type Art = {
  id: number
  title: string
  description: string
  artistId: number
}

// # -----------------------------------------------------------
// # FAKE DATABASE

// A fake database, an array of arts

// Here I'm creating a function to generate an Art
// using the excellent `faker` library to randomize
// some data on each property
const _generateArt =
  (artists: Artist[]) =>
  (index: number): Art => ({
    id: index + 1,
    title: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    artistId: faker.helpers.arrayElement(artists).id,
  })

const generateArt = _generateArt(artists)

// This is the actual fake database : An array of Arts
// generated on the fly with the function above

// So let's create an array of length 20...
let data = new Array(20)
  // ... fill it with 20 x null
  .fill(null)
  // ... and replace every occurence with a generated Art
  .map((v, i) => generateArt(i))

// # -----------------------------------------------------------
// # MODEL METHODS

// These are the functions to manipulate the data

const findArt = (id: number) => {
  // Here I'm using the array method `.find`
  // Pay attention to the syntax

  // data.find will iterate on every Art...
  // ...and stop when the callback function returns true
  const art = data.find(
    // this is the "callback" function (executed for every Art)
    // it returns true if the CURRENT ART (on the internal loop)
    // has its id equal the id (from the argument above)
    (a) => a.id === id,
  )
  // (the whole function returns the occurence for which
  // the callback returned true, or null if it never returned true)

  if (art == null) {
    throw boom.notFound('Art not found', { id })
  }

  return art
}

const addArtToArtist = (
  // Here I'm using the "creation payload" DTO
  // defined in DTOs directory.
  artCreationPayload: ArtCreationPayload,
  artist: Artist,
) => {
  // Just some wizardry to increment the id
  // Find the last Art with data.at(-1) and add 1 to it's id
  const nextArtId = (data.at(-1)?.id ?? 0) + 1

  // Here I'm creating a new Art...
  const art: Art = {
    // ... with the generated id
    id: nextArtId,
    // ... and the data received
    ...artCreationPayload,
    // ... and the id of the artist
    artistId: artist.id,
  }

  // Here I'm "appending" the new art
  // by replacing the entire array,
  // with the new Art at the end

  // So let's create a new array
  data = [
    // ... with all the existing Arts
    ...data,
    // ... and the new Art at the end
    art,
  ]

  return art
}

const listArtsOfArtist = (artist: Artist) => {
  // Here I'm using the array method `.find`
  // Pay attention to the syntax

  // data.filter will iterate on every Art...
  // ...and keep only those for which the callback function returns true
  const artsOfArtist = data.filter(
    // this is the "callback" function (executed for every Art)
    // it returns true if the CURRENT ART (on the internal loop)
    // has its artistId equal the id of the artist (from the argument above)
    (a) => a.artistId === artist.id,
  )

  // (No need to check anything. `.filter()` will return
  // an empty array if none found matching the callback)

  return artsOfArtist
}

const updateArt = (
  oldArt: Art,
  // Here I'm using the  "update payload" DTO
  // defined in DTOs directory
  artUpdatePayload: ArtUpdatePayload,
) => {
  // Retreiving index of the art in the database
  const artIndex = data.indexOf(oldArt)

  if (artIndex === -1) {
    throw boom.notFound('Art not found', { id: oldArt.id })
  }

  // Here I'm updating the art
  // by entirely copying it, and
  // replacing its new values

  // So, let's create a new Art...
  const newArt: Art = {
    // ... with all the properties of the previous one
    ...oldArt,
    // ... and all updated properties we want
    ...artUpdatePayload,
  }

  // Here I'm replacing the art in the database
  // by copying the entire array,
  // except the art I want to replace

  // So, let's create a new array...
  data = [
    // ... containing every Arts before index
    ...data.slice(0, artIndex),
    // ... and the updated Art I want to replace
    newArt,
    // ... and every Arts after index
    ...data.slice(artIndex + 1),
  ]

  return oldArt
}

const deleteArt = (oldArt: Art) => {
  // Retreiving index of the art in the database
  const artIndex = data.indexOf(oldArt)

  if (artIndex === -1) {
    throw boom.notFound('Art not found', { id: oldArt.id })
  }

  // Here I'm removing the art from database
  // by copying the entire array,
  // except the art I don't want anymore

  // So, let's create a new array...
  data = [
    // ... containing every arts before index
    ...data.slice(0, artIndex),
    // ... and every arts after index
    ...data.slice(artIndex + 1),
  ]

  // (This is how we remove something from
  // an array in a "pure" way)

  return oldArt
}

export {
  Art,
  data as arts,
  addArtToArtist,
  listArtsOfArtist,
  findArt,
  updateArt,
  deleteArt,
}
