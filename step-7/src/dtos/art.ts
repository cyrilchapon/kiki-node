import { z } from 'zod'

// # -----------------------------------------------------------
// # INTRODUCTION

// A "DTO" (Data Transfer Object) is the representation
// of an object when exchanged between client and server

// When creating an object through a POST in the API,
// you need for example to omit the `id`.
// Another example is when making an update with PUT,
// you need to omit the properties you don't want to change

// As a consequence, a DTO is often a "subset" of the model
// you can think of it as a "partial" objet of the model

// # -----------------------------------------------------------
// # SCHEMAS

// A schema is a "theorical shape" used by the developer
// to **validate** the incoming API data (in an unknown form)

// This is what "payloads" **should look like**
// when exchanging between client and server.

// These are expressed here using the excellent `zod` validation library

// an "art creation" should be an object...
const artCreationSchema = z
  .object({
    // ... with a "title" as a string between 3 and 50 chars
    title: z.string().min(3).max(50),
    // ... and a "description" as a string between 3 and 500 chars
    description: z.string().max(500),
  })
  // ... with no other property
  .strict()

// an "art update" should be an object
// just like an "art creation",
// but with every property optional (undefined-able; omitable)
const artUpdateSchema = artCreationSchema.partial()

// # -----------------------------------------------------------
// # TYPES

// Just extracting the types ("shapes") of the payloads
// for typescript usage (hover them to understand)
type ArtCreationPayload = z.infer<typeof artCreationSchema>
type ArtUpdatePayload = z.infer<typeof artUpdateSchema>

// # -----------------------------------------------------------
// # FUNCTIONS

// some utility functions to simply create (and validate)
// a payload from an unknown object
// (using the schemas defined above)
const artCreationPayload = (data: unknown) => artCreationSchema.parse(data)
const artUpdatePayload = (data: unknown) => artUpdateSchema.parse(data)

export {
  artCreationSchema,
  artUpdateSchema,
  artCreationPayload,
  artUpdatePayload,
  ArtCreationPayload,
  ArtUpdatePayload,
}
