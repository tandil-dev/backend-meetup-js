import express from 'express'
import swaggerUi from 'swagger-ui-express'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
import { PORT } from './config'
import { router } from './routes'

const app = express();

app.use(bodyParser.json())
app.use(fileUpload())

const port = PORT

app.get(
  "/",
  (req, res) => {
    const { query } = req
    res.send(`Hello ${JSON.stringify(query)}`)
  })

app.use(router)

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup({}));

app.listen(
  port,
  () => {
    console.log(`Listen server in port ${port}`)
  }
)