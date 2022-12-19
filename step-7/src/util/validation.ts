import boom from '@hapi/boom'
import { ErrorRequestHandler } from 'express'
import { ZodError, z, ZodTypeAny } from 'zod'

const _zodStringToNumberPreprocessor = (a: unknown) =>
  parseInt(z.string().parse(a), 10)

export const _zodStringToNumber = <T extends ZodTypeAny>(schema: T) =>
  z.preprocess(_zodStringToNumberPreprocessor, schema)

const zodIdSchema = z.object({ id: _zodStringToNumber(z.number()) })
export const zodIdParams = (params: unknown) => zodIdSchema.parse(params)

// This function is an Express Error Middleware (error handler)
// used to transform errors generate by zod and output a boom error
export const zodToBoom: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    next(boom.badRequest('Validation error', err.issues))
    return
  }

  next(err)
}
