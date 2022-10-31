"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const logger_1 = __importDefault(require("./config/logger"));
const fastify_cors_1 = __importDefault(require("fastify-cors"));
const fastify_swagger_1 = __importDefault(require("fastify-swagger"));
const fastify_multipart_1 = __importDefault(require("fastify-multipart"));
const cors_option_1 = __importDefault(require("./config/cors-option"));
const fastify_static_1 = __importDefault(require("fastify-static"));
const swagger_options_1 = __importDefault(require("./config/swagger-options"));
const static_file_options_1 = __importDefault(require("./config/static-file-options"));
const routes_1 = __importDefault(require("./routes"));
const server = (0, fastify_1.default)({ logger: logger_1.default, bodyLimit: 12500000 });
function build() {
    server.register(fastify_cors_1.default, cors_option_1.default);
    server.register(fastify_multipart_1.default);
    // if (process.env.NODE_ENV !== 'production') {
    server.register(fastify_swagger_1.default, swagger_options_1.default);
    // }
    server.register(fastify_static_1.default, static_file_options_1.default);
    server.register(routes_1.default);
    server.addContentTypeParser("multipart/form-data", (request, done) => {
        done(null, request);
    });
    return server;
}
exports.default = build;
//# sourceMappingURL=application.js.map