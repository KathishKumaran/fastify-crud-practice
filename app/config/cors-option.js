"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const corsOptions = {
    origin: '*',
    methods: 'OPTION, GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    exposedHeaders: 'Authorization'
};
exports.default = corsOptions;
