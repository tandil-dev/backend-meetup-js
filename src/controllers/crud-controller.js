export default (model) => {

  const hooks = {
    beforeFind: async () => Promise.resolve(),
    afterFind: async () => Promise.resolve()
  }

  const afterFind = (hook) => {
    hooks.afterFind = hook
  }

  const find = async (req, res) => {
    await hooks.beforeFind(req)
    let instances = await model.findAll()
    await hooks.afterFind(instances)
    return res.json(instances);
  }

  const findById = async (req, res) => {
    const { id } = req.params
    let instance = await model.findByPk(id)
    if (instance) {
      return res.json(instance);
    } else {
      return res.status(404).json({
        status: 404,
        message: `Resource not found width ID ${id}`
      })
    }
  }

  const create = async (req, res) => {
    try {
      let instance = await model.create(req.body)
      res.status(201).json(instance)
    } catch (err) {
      res.status(400).json(err);
    }
  }

  const update = async (req, res) => {
    const { id } = req.params
    try {
      const [numberOfAffectedRows, affectedRows] = await model.update(
        {...req.body},
        {where: { id }}
      )
      res.json(affectedRow[0])
    } catch (err) {
      res.status(400).json(err);
    }
  }

  const destroy = async (req, res) => {
    const { id } = req.params
    try {
      await model.destroy({
        where: { id }
      })
      res.status(200).send()
    } catch (err) {
      res.status(400).json(err);
    }
  }

  const relationHasMany = (relatedModel, foreignKey) => {
    return async (req, res) => {
      const { id } = req.params
      if (await model.count({ where: { id } })) {
        let instances = await relatedModel.findAll({ where: { [foreignKey]: id } })
        return res.json(instances);
      } else {
        return res.status(404).send()
      }
    }
  }

  const relationBelongsTo = (relatedModel, foreignKey) => {
    return async (req, res) => {
      const { id } = req.params
      let instance = await model.findByPk(id)
      if (instance) {
        let beTo = await relatedModel.findByPk(instance[foreignKey])
        if (beTo) {
          return res.json(beTo);
        } else {
          return res.status(404).send()
        }
      } else {
        return res.status(404).send()
      }
    }
  }

  return {
    find,
    findById,
    create,
    update,
    delete: destroy,
    relationHasMany,
    relationBelongsTo,
    afterFind
  }

}
