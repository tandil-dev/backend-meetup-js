import Sequalize from 'sequelize'
import { AssetsModel } from './assets'
import { NewsModel } from './news'
import { SectionModel } from './section'
import initialData from '../scripts/initial-data'

const sequelize = new Sequalize({
  dialect: 'sqlite',
  storage: 'data/database.sqlite'
})

sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
    initialData.init()
  })

const Assets = AssetsModel(sequelize, Sequalize)
const News = NewsModel(sequelize, Sequalize)
const Section = SectionModel(sequelize, Sequalize)

export {
  Assets,
  News,
  Section
}

