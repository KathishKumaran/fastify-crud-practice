import pino from "pino";
import moment from "moment";
import { FastifyReply, FastifyRequest } from "fastify";

const logLevel = process.env.LOG_LEVEL || "info";
const logConfig = {
  name: "ToGo API Server",
  level: logLevel,
  timestamp: () => `,"time":"${moment.utc()}"`,
  formatters: {
    level(lable: string, num: number) {
      return { level: lable };
    },
  },
  serializers: {
    res(reply: FastifyReply) {
      return {
        url: reply.request.url,
        method: reply.request.method,
        statusCode: reply.statusCode,
      };
    },
    req(request: FastifyRequest) {
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

const logger = pino(logConfig);

export default logger;
