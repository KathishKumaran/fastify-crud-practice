"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pdf = exports.list = exports.createCustomer = void 0;
const customer_service_1 = require("../services/customer.service");
function createCustomer(req, reply) {
    const attrs = req.body;
    return (0, customer_service_1.create)(attrs)
        .then((customer) => {
        reply.status(200).send(customer);
    })
        .catch((err) => {
        reply.status(400).send({ errors: err.message });
    });
}
exports.createCustomer = createCustomer;
function list(req, reply) {
    const query = req.query;
    (0, customer_service_1.filterAndPaginate)(query)
        .then((customers) => {
        reply.code(200).send(customers);
    })
        .catch((error) => {
        reply.send(error);
    });
}
exports.list = list;
function pdf(req, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const { base64 } = req.body;
        (0, customer_service_1.savePdf)(base64)
            .then((base64) => {
            reply.code(200).send(base64);
        })
            .catch((error) => {
            reply.code(403).send(error);
        });
    });
}
exports.pdf = pdf;
