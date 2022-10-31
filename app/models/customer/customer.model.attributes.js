"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attributes = exports.modelOptions = void 0;
const sequelize_1 = require("sequelize");
exports.modelOptions = {
    tableName: "customers",
    underscored: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true,
    indexes: [{ fields: ["name", "email", "mobile"] }],
};
exports.attributes = {
    name: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: "Name should be present",
            },
        },
    },
    door_no: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING(80),
        allowNull: false,
    },
    city: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    pin_code: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    },
    taluk: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    district: {
        type: sequelize_1.DataTypes.STRING(80),
        allowNull: false,
    },
    mobile: {
        type: sequelize_1.DataTypes.STRING(35),
        allowNull: false,
    },
    landline: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(241),
        allowNull: false,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    deleted_at: {
        type: sequelize_1.DataTypes.DATE,
    },
};
