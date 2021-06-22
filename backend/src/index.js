const express = require('express')
const winston = require('winston')
const morgan = require('morgan')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
require('dotenv').config()
const logger = require('./startup/logging')
const DB_CONNECTION = require('./startup/db')
const { default: swaggerDoc } = require('./swagger/swaggerDoc')

DB_CONNECTION()

const app = express()
app.use(cors())

app.use(express.json())

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  )
}

require('./startup/routes')(app)

const PORT = process.env.PORT
app.listen(PORT, () => winston.info(`Listening on port ${PORT}...`))
