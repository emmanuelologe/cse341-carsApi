const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Cars API',
        description: 'A simple CRUD API to manage my cars API',
    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);