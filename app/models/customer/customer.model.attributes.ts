import { DataTypes } from "sequelize";

export const modelOptions = {
  tableName: "customers",
  underscored: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  deletedAt: "deleted_at",
  paranoid: true,
  indexes: [{ fields: ["name", "email", "mobile"] }],
};

export const attributes = {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notNull: {
        msg: "Name should be present",
      },
    },
  },
  door_no: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  pin_code: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  taluk: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  district: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING(35),
    allowNull: false,
  },
  landline: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(241),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  deleted_at: {
    type: DataTypes.DATE,
  },
};
