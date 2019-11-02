import express from 'express'

const router = express.Router()

import { SectionController } from '../controllers'

router
  .get('/', SectionController.find)
  .get('/:id', SectionController.findById)
  .post('/', SectionController.create)
  .put('/:id', SectionController.update)
  .delete('/:id', SectionController.delete)
  .get('/:id/news', SectionController.news)

export { router as sections }
