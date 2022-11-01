"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.savePdf = exports.filterAndPaginate = exports.create = void 0;
const models_1 = require("../models");
const lodash_1 = require("lodash");
const paginator_result_1 = require("../lib/paginator-result");
const constants_1 = require("../config/constants");
const customer_global_search_query_1 = __importDefault(
  require("../queries/customer-global-search-query")
);
const customer_column_search_query_1 = __importDefault(
  require("../queries/customer-column-search.query")
);
const axios_1 = __importDefault(require("axios"));
const fast_xml_parser_1 = require("fast-xml-parser");
const fs = require("fs");
function create(attrs) {
  return __awaiter(this, void 0, void 0, function* () {
    return yield models_1.Customer.create(attrs);
  });
}
exports.create = create;
function filterAndPaginate(query) {
  const page = query.page && query.page > 0 ? query.page : 1;
  const perPage = query.per_page && query.per_page > 0 ? query.per_page : 10;
  const offset = (page - 1) * perPage;
  const limit = perPage;
  const queries =
    (0, lodash_1.size)(query.q) >= constants_1.Q_MINIMUM_SIZE
      ? (0, customer_global_search_query_1.default)(query)
      : {};
  const columnQueries = (0, customer_column_search_query_1.default)(query);
  return models_1.Customer.findAndCountAll({
    limit,
    offset,
    where: Object.assign(Object.assign({}, queries), columnQueries),
    order: [["id", "ASC"]],
  }).then((customers) => {
    const customersList = (0, lodash_1.map)(customers.rows, (row) => ({
      id: row.id,
      name: row.name,
      door_no: row.door_no,
      address: row.address,
      city: row.city,
      pincode: row.pin_code,
      taluk: row.taluk,
      district: row.district,
      mobile: row.mobile,
      landline: row.landline,
      email: row.email,
      created_at: row.created_at,
      updated_at: row.updated_at,
    }));
    const rowsAndCounts = { count: customers.count, rows: customersList };
    const result = (0, paginator_result_1.paginate)(
      rowsAndCounts,
      perPage,
      page
    );
    return (0, paginator_result_1.paginatorResult)(result, "customers");
  });
}
exports.filterAndPaginate = filterAndPaginate;
function savePdf(base64) {
  return __awaiter(this, void 0, void 0, function* () {
    const parser = new fast_xml_parser_1.XMLParser();
    // const { mimetype: fileType } = await file;
    // if (!(fileType.includes("png") || fileType.includes("svg"))) {
    //   throw new Error("Kindly upload only PNG or SVG file");
    // }
    const fileName = `${new Date().getTime()}.pdf`;
   // const filePath = `${__dirname}/../assets/${fileName}`;
    const filePath = `/app/dist/assets/${fileName}.pdf`;
    // const base64 = (await (await file).toBuffer()).toString("base64");
    var buf = Buffer.from(base64, "base64");
    console.log("---------------", buf);
    fs.writeFile(filePath, buf, (error) => {
      if (error) {
        throw error;
      } else {
        console.log("buffer saved!");
      }
    });
    const data = yield axios_1.default.request({
      method: "POST",
      url: "https://ocrapi.visive.ai",
      data: {
        file: fs.createReadStream(filePath),
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("-------------data", data);
    return parser.parse(data.data);
  });
}
exports.savePdf = savePdf;
//# sourceMappingURL=customer.service.js.map
