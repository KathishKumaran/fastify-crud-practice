"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_public_routes_1 = __importDefault(require("./customer.public.routes"));
function publicRoutes(fastify, opts, next) {
    fastify.register(customer_public_routes_1.default);
    next();
}
exports.default = publicRoutes;
