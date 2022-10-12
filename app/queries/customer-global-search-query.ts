import Sequelize from "sequelize";
import { CustomerListQueryParams } from "../types/customers.controllers";

const { Op } = Sequelize;

const globalSearchQuery = (query: CustomerListQueryParams) => {
  const text = query.q;
  const searchQueries: any = [];
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

export default globalSearchQuery;
