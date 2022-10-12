import publicRoutes from "./public.routes";

import { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";

function routes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: { prefix: string },
  next: (err?: Error) => void
) {
  fastify.register(publicRoutes);

  next();
}

export default routes;
