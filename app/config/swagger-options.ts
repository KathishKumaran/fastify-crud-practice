import { SwaggerOptions } from "fastify-swagger";
import { trimStart } from "lodash";

const tagOrder = [
  {
    name: "customer",
    description: "routes related to customer",
  },
];

const baseUrl = trimStart(process.env.BASE_URL, "https://");

const swaggerOptions: SwaggerOptions = {
  routePrefix: "/doc",
  exposeRoute: true,
  swagger: {
    tags: tagOrder,
    info: {
      title: " API",
      description:
        "Building a blazing fast REST API with Node.js, Postgresql, Fastify and Swagger",
      version: "1.0.0",
    },
    host: baseUrl,
    schemes: ["https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
  },
};
export default swaggerOptions;
