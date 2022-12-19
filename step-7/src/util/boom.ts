import { ErrorRequestHandler } from 'express'
import { Boom } from '@hapi/boom'

// At various locations on the API,
// I'm using the excellent `boom` library
// to generate some errors

// This function is an express "Error middleware"
// (error handler) that recognize errors generated
// with Boom, and handles them appropriately
export const handleBoom: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof Boom) {
    res.status(err.output.statusCode)
    res.json({
      ...err.output.payload,
      ...(err.data ? { data: err.data } : {}),
    })
    return
  }

  next(err)
}
