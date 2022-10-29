import fastify, { FastifyInstance } from "fastify";
import logger from "./config/logger";
import cors from "fastify-cors";
import swagger from "fastify-swagger";
import fastifyMultipart from "fastify-multipart";
import { IncomingMessage, Server, ServerResponse } from "http";
import corsOptions from "./config/cors-option";
import fastifyStatic from "fastify-static";
import swaggerOptions from "./config/swagger-options";
import staticFileOptions from "./config/static-file-options";
import routes from "./routes";

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({ logger });

function build() {
  server.register(cors, corsOptions);
  server.register(fastifyMultipart);

  // if (process.env.NODE_ENV !== 'production') {
  server.register(swagger, swaggerOptions);
  // }

  server.register(fastifyStatic, staticFileOptions);
  server.register(routes);
  server.addContentTypeParser(
    "multipart/form-data",
    (request: any, done: any) => {
      done(null, request);
    }
  );
  return server;
}

export default build;
