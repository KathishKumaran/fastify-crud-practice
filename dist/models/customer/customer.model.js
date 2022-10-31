"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../config/database"));
const customer_model_attributes_1 = require("./customer.model.attributes");
function CustomerModelFactory(sequelize) {
    return sequelize.define("Customer", customer_model_attributes_1.attributes, customer_model_attributes_1.modelOptions);
}
const Customer = CustomerModelFactory(database_1.default);
exports.default = Customer;
//# sourceMappingURL=customer.model.js.map