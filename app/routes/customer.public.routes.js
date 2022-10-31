"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customers_controller_1 = require("../controllers/customers.controller");
const customer_create_router_option_1 = __importDefault(require("./customer-create.router-option"));
const customer_list_router_option_1 = __importDefault(require("./customer-list-router-option"));
function customerPublicRoutes(fastify, opts, next) {
    fastify.post("/v1/customers", customer_create_router_option_1.default, customers_controller_1.createCustomer);
    fastify.get("/v1/customers_list", customer_list_router_option_1.default, customers_controller_1.list);
    fastify.post("/v1/save_pdf", customers_controller_1.pdf);
    next();
}
exports.default = customerPublicRoutes;
