const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Familing API',
            version: '1.0.0',
            description: 'Familing API with express',
        },
        host: 'localhost:3300',
        basePath: '/'
    },
    apis: ['../api/routes/*.js', './swagger/*']
};

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};