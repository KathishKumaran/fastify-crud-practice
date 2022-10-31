"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const sequelize_1 = require("sequelize");
const env = process.env.NODE_ENV || "development";
// tslint:disable-next-line: no-var-requires
const config = require(`${__dirname}/../../db/config.json`)[env];
const db = new sequelize_1.Sequelize(process.env[config.use_env_variable], {
    logging: logger_1.default.debug.bind(logger_1.default),
    pool: {
        min: 1,
        max: 300,
        acquire: 120000,
    },
});
exports.default = db;
