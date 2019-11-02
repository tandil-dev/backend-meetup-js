import express from 'express'

const router = express.Router()

import { AssetsController } from '../controllers'

router
  .get('/', AssetsController.find)
  .get('/:id', AssetsController.findById)
  .delete('/:id', AssetsController.delete)
  .post('/upload', AssetsController.upload)

export { router as assets }
