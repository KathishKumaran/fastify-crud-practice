"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function columnSearchQuery(query) {
    const searchQueries = [];
    const { name, door_no, address, city, pin_code, taluk, district, mobile, landline, email, } = query;
    if (name) {
        const nameQuery = { name: { [sequelize_1.Op.iLike]: `%${name}%` } };
        searchQueries.push(nameQuery);
    }
    if (door_no) {
        const doorQuery = { door_no: { [sequelize_1.Op.iLike]: `%${door_no}%` } };
        searchQueries.push(doorQuery);
    }
    if (address) {
        const addressQuery = { address: { [sequelize_1.Op.iLike]: `%${address}%` } };
        searchQueries.push(addressQuery);
    }
    if (city) {
        const cityQuery = { city: { [sequelize_1.Op.iLike]: `%${city}%` } };
        searchQueries.push(cityQuery);
    }
    if (pin_code) {
        const pincodeQuery = { pin_code: { [sequelize_1.Op.iLike]: `%${pin_code}%` } };
        searchQueries.push(pincodeQuery);
    }
    if (taluk) {
        const talukQuery = { taluk: { [sequelize_1.Op.iLike]: `%${taluk}%` } };
        searchQueries.push(talukQuery);
    }
    if (district) {
        const districtQuery = { district: { [sequelize_1.Op.iLike]: `%${district}%` } };
        searchQueries.push(districtQuery);
    }
    if (mobile) {
        const mobileQuery = { mobile: { [sequelize_1.Op.iLike]: `%${mobile}%` } };
        searchQueries.push(mobileQuery);
    }
    if (landline) {
        const landlineQuery = { landline: { [sequelize_1.Op.iLike]: `%${landline}%` } };
        searchQueries.push(landlineQuery);
    }
    if (email) {
        const emailQuery = { email: { [sequelize_1.Op.iLike]: `%${email}%` } };
        searchQueries.push(emailQuery);
    }
    return {
        [sequelize_1.Op.and]: searchQueries,
    };
}
exports.default = columnSearchQuery;
//# sourceMappingURL=customer-column-search.query.js.map