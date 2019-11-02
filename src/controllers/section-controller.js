import { Section } from '../models'
import {News} from '../models'

import CrudController from './crud-controller'

const SectionController = CrudController(Section)

SectionController.news = SectionController.relationHasMany(News,'sectionId')

export default SectionController



