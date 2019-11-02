import express from 'express'

const router = express.Router()

import { NewsController } from '../controllers'

router
  .get('/', NewsController.find)
  .get('/:id', NewsController.findById)
  .post('/', NewsController.create)
  .put('/:id', NewsController.update)
  .delete('/:id', NewsController.delete)
  .get('/:id/section', NewsController.section)
  .get('/:id/image', NewsController.image)

export { router as news }
