import { z } from 'zod'

// # SCHEMAS
export const artistCreationSchema = z
  .object({
    firstName: z.string().min(3).max(50),
    lastName: z.string().min(3).max(50),
  })
  .strict()
export const artistUpdateSchema = artistCreationSchema.partial()

// # TYPES
export type ArtistCreationPayload = z.infer<typeof artistCreationSchema>
export type ArtistUpdatePayload = z.infer<typeof artistUpdateSchema>

// # FUNCTIONS
export const artistCreationPayload = (data: unknown) =>
  artistCreationSchema.parse(data)
export const artistUpdatePayload = (data: unknown) =>
  artistUpdateSchema.parse(data)
