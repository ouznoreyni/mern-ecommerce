const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for SenStore',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It is an ecommerce application.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'ousmane diop',
      url: 'https://github.com/ouznoreyni',
    },
    servers: [
      {
        url: 'http://localhost:8000',
        description: 'Development server',
      },
    ],
  },
}

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['**/*..js'],
}
export default swaggerJSDoc(options)
