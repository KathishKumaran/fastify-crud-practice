"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const corsOptions = {
    origin: '*',
    methods: 'OPTION, GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    exposedHeaders: 'Authorization',
    allowedHeaders: 'Access-Control-Allow-Headers'
};
exports.default = corsOptions;
//# sourceMappingURL=cors-option.js.map