"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const { Op } = sequelize_1.default;
const globalSearchQuery = (query) => {
    const text = query.q;
    const searchQueries = [];
    searchQueries.push({
        name: { [Op.iLike]: `%${text}%` },
    });
    searchQueries.push({
        door_no: { [Op.iLike]: `%${text}%` },
    });
    searchQueries.push({
        address: { [Op.iLike]: `%${text}%` },
    });
    searchQueries.push({
        city: { [Op.iLike]: `%${text}%` },
    });
    searchQueries.push({
        pin_code: { [Op.iLike]: `%${text}%` },
    });
    searchQueries.push({
        taluk: { [Op.iLike]: `%${text}%` },
    });
    searchQueries.push({
        district: { [Op.iLike]: `%${text}%` },
    });
    searchQueries.push({
        mobile: { [Op.iLike]: `%${text}%` },
    });
    searchQueries.push({
        landline: { [Op.iLike]: `%${text}%` },
    });
    searchQueries.push({
        email: { [Op.iLike]: `%${text}%` },
    });
    const result = {
        [Op.or]: searchQueries,
    };
    return result;
};
exports.default = globalSearchQuery;
//# sourceMappingURL=customer-global-search-query.js.map