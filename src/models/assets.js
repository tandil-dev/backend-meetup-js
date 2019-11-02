import { BASE_URL_STATIC_CONTENT } from '../config'

const generateUrl = (resolved) => {
  return `${BASE_URL_STATIC_CONTENT}/${resolved}`
}

const AssetsModel = (sequalize, type) => {
  const Model = sequalize.define('assets', {
    // attributes
    name: {
      type: type.STRING,
      allowNull: false
    },
    resolved: {
      type: type.STRING,
      allowNull: false
    },
    type: {
      type: type.STRING,
      allowNull: false
    }
  })
  Model.prototype.toJSON =  function () {
    let values = Object.assign({}, this.get(), {url: generateUrl(this.get().resolved)})
    delete values.resolved
    return values
  }

  return Model;
}

export { AssetsModel }