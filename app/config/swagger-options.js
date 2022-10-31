"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const tagOrder = [
    {
        name: "customer",
        description: "routes related to customer",
    },
];
const baseUrl = (0, lodash_1.trimStart)(process.env.BASE_URL, "https://");
const swaggerOptions = {
    routePrefix: "/doc",
    exposeRoute: true,
    swagger: {
        tags: tagOrder,
        info: {
            title: " API",
            description: "Building a blazing fast REST API with Node.js, Postgresql, Fastify and Swagger",
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
exports.default = swaggerOptions;
