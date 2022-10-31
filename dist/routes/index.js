"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const public_routes_1 = __importDefault(require("./public.routes"));
function routes(fastify, opts, next) {
    fastify.register(public_routes_1.default);
    next();
}
exports.default = routes;
//# sourceMappingURL=index.js.map