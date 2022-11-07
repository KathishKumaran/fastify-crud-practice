import { FastifyReply, FastifyRequest, FastifyError } from "fastify";
import { CustomerAttributes } from "../types/customer";
import {
  create,
  filterAndPaginate,
  savePdf,
} from "../services/customer.service";
import { CustomerListQueryParams } from "../types/customers.controllers";

function createCustomer(req: FastifyRequest, reply: FastifyReply) {
  const attrs = req.body as CustomerAttributes;
  return create(attrs)
    .then((customer: any) => {
      reply.status(200).send(customer);
    })
    .catch((err: Error) => {
      reply.status(400).send({ errors: err.message });
    });
}

function list(req: FastifyRequest, reply: FastifyReply) {
  const query = req.query as CustomerListQueryParams;
  filterAndPaginate(query)
    .then((customers) => {
      reply.code(200).send(customers);
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}
async function pdf(req: FastifyRequest, reply: FastifyReply) {
  const { base64 } = req.body as { base64: string };

  savePdf(base64, reply)
    .then((base64) => {
      reply.code(200).send(base64);
    })
    .catch((error) => {
      reply.code(500).send(error);
    });
}

export { createCustomer, list, pdf };
