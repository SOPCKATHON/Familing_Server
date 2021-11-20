const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "Familing API",
      version: "1.0.0",
      description: "Familing API with express"
    },
    host: "localhost:3300",
    basePath: "/",
    schemes: ["http", "https"],
    definitions: {
      Post: {
        type: "object",
        properties: {
          postId: { type: "number" },
          category: { type: "number" },
          date: { type: "timestamp" },
          content: { type: "string" }
        }
      }
    }
  },
  apis: ["./api/routes/post/*.js", "./swagger/*"]
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs
};
