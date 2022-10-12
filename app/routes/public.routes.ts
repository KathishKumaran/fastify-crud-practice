import { Server, ServerResponse, IncomingMessage } from "http";
import { FastifyInstance } from "fastify";
import customerPublicRoutes from "./customer.public.routes";

function publicRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: { prefix: string },
  next: (err?: Error) => void
) {
  fastify.register(customerPublicRoutes);
  next();
}

export default publicRoutes;
