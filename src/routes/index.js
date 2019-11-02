import express from 'express'
import { assets } from './assets'
import { news } from './news'
import { sections } from './sections'

const router = express.Router()

router.use('/static', express.static('data/uploads'))
router.use('/assets', assets)
router.use('/news', news)
router.use('/sections', sections)

export { router }

