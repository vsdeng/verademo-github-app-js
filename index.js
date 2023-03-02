const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.routes");
const postsRoutes = require("./routes/posts.routes");
const adminRoutes = require("./routes/admin.routes");


app.use(bodyParser.json());

/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    openapi: "3.0.0",
    info: {
      title: "Verdemo-API",
      description: "API documentation",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:8000/"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/public", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
app.use("/admin", adminRoutes);

app.listen(8000, () => {
  console.log("Verademo API is ready to listen for requests");
});

const _zipObjectDeep = require('lodash/zipObjectDeep'),
zipObjectDeep = (props, values) => {
  return _zipObjectDeep(props, values);
}
