import { Op } from "sequelize";
import { CustomerListQueryParams } from "../types/customers.controllers";

function columnSearchQuery(query: CustomerListQueryParams) {
  const searchQueries: any[] = [];
  const {
    name,
    door_no,
    address,
    city,
    pin_code,
    taluk,
    district,
    mobile,
    landline,
    email,
  } = query;
  if (name) {
    const nameQuery = { name: { [Op.iLike]: `%${name}%` } };

    searchQueries.push(nameQuery);
  }
  if (door_no) {
    const doorQuery = { door_no: { [Op.iLike]: `%${door_no}%` } };

    searchQueries.push(doorQuery);
  }
  if (address) {

    const addressQuery = { address: { [Op.iLike]: `%${address}%` } };

    searchQueries.push(addressQuery);
  }
  if (city) {
    const cityQuery = { city: { [Op.iLike]: `%${city}%` } };

    searchQueries.push(cityQuery);
  }
  if (pin_code) {
    const pincodeQuery = { pin_code: { [Op.iLike]: `%${pin_code}%` } };

    searchQueries.push(pincodeQuery);
  }
  if (taluk) {
    const talukQuery = { taluk: { [Op.iLike]: `%${taluk}%` } };

    searchQueries.push(talukQuery);
  }
  if (district) {
    const districtQuery = { district: { [Op.iLike]: `%${district}%` } };

    searchQueries.push(districtQuery);
  }
  if (mobile) {
    const mobileQuery = { mobile: { [Op.iLike]: `%${mobile}%` } };

    searchQueries.push(mobileQuery);
  }
  if (landline) {
    const landlineQuery = { landline: { [Op.iLike]: `%${landline}%` } };

    searchQueries.push(landlineQuery);
  }
  if (email) {
    const emailQuery = { email: { [Op.iLike]: `%${email}%` } };

    searchQueries.push(emailQuery);
  }
  return {
    [Op.and]: searchQueries,
  };
}

export default columnSearchQuery;
