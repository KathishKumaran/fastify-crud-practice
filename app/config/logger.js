"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const moment_1 = __importDefault(require("moment"));
const logLevel = process.env.LOG_LEVEL || "info";
const logConfig = {
    name: "ToGo API Server",
    level: logLevel,
    timestamp: () => `,"time":"${moment_1.default.utc()}"`,
    formatters: {
        level(lable, num) {
            return { level: lable };
        },
    },
    serializers: {
        res(reply) {
            return {
                url: reply.request.url,
                method: reply.request.method,
                statusCode: reply.statusCode,
            };
        },
        req(request) {
            return {
                url: request.url,
                method: request.method,
                hostname: request.hostname,
                remotePort: request.socket.remotePort,
                contentType: request.headers["content-type"],
                remoteAddress: request.ip,
            };
        },
    },
};
const logger = (0, pino_1.default)(logConfig);
exports.default = logger;
