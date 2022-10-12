import { CustomerInstance } from "./customer";

export interface CustomerListQueryParams {
  q?: string;
  page?: number;
  per_page?: number;
  name?: string;
  door_no?: string;
  address?: string;
  city?: string;
  pin_code?: string;
  taluk?: string;
  district?: string;
  mobile?: string;
  landline?: string;
  email?: string;
}
export interface CustomerRowsAndCount {
  count: number;
  rows: CustomerInstance[];
}
