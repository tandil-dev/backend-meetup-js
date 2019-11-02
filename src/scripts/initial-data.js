import { News, Section } from '../models'

export default {
  init: async function () {
    try {
      await Section.bulkCreate([
        { id: 1, name: 'Locales' },
        { id: 2, name: 'Nacionales' },
        { id: 3, name: 'Policiales' },
        { id: 4, name: 'Internacionales' }
      ])
      await News.bulkCreate([
        { id: 1, title: 'Noticia local', subTitle: 'subtitulo', description: 'Descripcion de la noticia 1', sectionId: 1 },
        { id: 2, title: 'Noticia nacional', subTitle: 'subtitulo', description: 'Descripcion de la noticia 2', sectionId: 2 },
        { id: 3, title: 'Noticia policial', subTitle: 'subtitulo', description: 'Descripcion de la noticia 3', sectionId: 3 },
        { id: 4, title: 'Noticia internacional', subTitle: 'subtitulo', description: 'Descripcion de la noticia 4', sectionId: 4 }
      ])
      console.log('Initial data Created')
    } catch (err) {
      
    }
    
  }
}
