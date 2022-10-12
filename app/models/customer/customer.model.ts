import db from "../../config/database";
import { Sequelize } from "sequelize";
import { CustomerStatic } from "../../types/customer";
import { modelOptions, attributes } from "./customer.model.attributes";

function CustomerModelFactory(sequelize: Sequelize): CustomerStatic {
  return sequelize.define(
    "Customer",
    attributes,
    modelOptions
  ) as CustomerStatic;
}

const Customer = CustomerModelFactory(db);
export default Customer;
