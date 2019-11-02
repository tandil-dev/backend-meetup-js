import { Assets } from '../models'

import CrudController from './crud-controller'

import { PATH_UPLOADS, BASE_URL_STATIC_CONTENT } from '../config'

const AssetsController = CrudController(Assets);

async function mv(file) {
  return await new Promise((resolve, reject) => {
    const name = `${Date.now()}___${file.name}`
    file.mv(`${PATH_UPLOADS}/${name}`, err => {
      if (err) return reject()
      file.resolved = name
      return resolve(file)
    })
  })
}

AssetsController.upload = async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  try {
    let resolvedFiles = await Promise.all(
      Object.keys(req.files).map(file => mv(req.files[file]))
    )
    let uploadFiles = await Promise.all(
      resolvedFiles.map(file => Assets.create({
        name: file.name,
        resolved: file.resolved,
        type: file.mimetype
      }))
    )
    res.json(uploadFiles)
  } catch (err) {
    next(err)
  }
}

export default AssetsController