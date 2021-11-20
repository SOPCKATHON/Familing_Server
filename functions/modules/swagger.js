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
      memory: {
        type: "object",
        properties: {
          postId: { type: "number" },
          category: { type: "number" },
          date: { type: "timestamp" },
          month: { type: "number" },
          content: { type: "string" }
        }
      }
    }
  },
  apis: ["./api/routes/memory/*.js", "./swagger/*", "./api/routes/profile/*.js"]
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs
};
