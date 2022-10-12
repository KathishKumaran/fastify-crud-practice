import { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import { createCustomer, list } from "../controllers/customers.controller";
import customerCreateRouterOpts from "./customer-create.router-option";
import listCustomerRouterOpts from "./customer-list-router-option";

function customerPublicRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: { prefix: string },
  next: (err?: Error) => void
) {
  fastify.post("/v1/customers", customerCreateRouterOpts, createCustomer);
  fastify.get("/v1/customers_list", listCustomerRouterOpts, list);
  next();
}
export default customerPublicRoutes;
