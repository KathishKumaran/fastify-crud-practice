import { Model, BuildOptions } from "sequelize";

export interface CustomerAttributes {
  id: number;
  name: string;
  door_no: string;
  address: string;
  city: string;
  pin_code: string;
  taluk: string;
  district: string;
  mobile: string;
  landline: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export type CustomerCreateAttributes = Pick<
  CustomerAttributes,
  | "name"
  | "door_no"
  | "address"
  | "city"
  | "pin_code"
  | "taluk"
  | "district"
  | "mobile"
  | "landline"
  | "email"
>;

export interface CustomerInstance
  extends Model<CustomerAttributes, CustomerCreateAttributes>,
    CustomerAttributes {}

export type CustomerStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): CustomerInstance;
};
