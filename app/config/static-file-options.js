"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const staticFileOptions = {
    root: path_1.default.join(__dirname, '../assets'),
    prefix: '/assets/' // optional: default '/'
};
exports.default = staticFileOptions;
