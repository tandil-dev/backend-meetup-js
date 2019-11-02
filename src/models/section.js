const SectionModel = (sequalize, type) => {
  const Model = sequalize.define('section', {
    // attributes
    name: {
      type: type.STRING,
      allowNull: false
    }
  })
  Model.associate = function(models) {
    console.log('models', models)
    Model.hasMany(models.news, {as: 'news'})
  };
  return Model
}

export { SectionModel }