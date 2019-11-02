import { News, Section, Assets } from '../models'

import CrudController  from './crud-controller'

const NewsController = CrudController(News);

NewsController.section = NewsController.relationBelongsTo(Section, 'sectionId')

NewsController.image = NewsController.relationBelongsTo(Assets, 'image')

export default NewsController



