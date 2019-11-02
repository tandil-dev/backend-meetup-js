const NewsModel = (sequalize, type) => {
  const Model =  sequalize.define('news', {
    // attributes
    title: {
      type: type.STRING,
      allowNull: false
    },
    subTitle: {
      type: type.STRING,
      allowNull: false
    },
    description: {
      type: type.STRING,
      allowNull: false
    },
    sectionId: {
      type: type.INTEGER,
      allowNull: false
    },
    //asset Id for image
    image: {
      type: type.INTEGER,
      allowNull: true
    }
  })

  Model.associate = function(models) {
    console.log('models', models)
    Model.belongsTo(models.section, {foreignKey: 'sectionId', as: 'section'})
  };
  
  return Model
}

export { NewsModel }