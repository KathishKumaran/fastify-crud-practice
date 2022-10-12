import { pagination } from "../routes/shared-schema/pagination-schema";

const listCustomerRouterOpts = {
  schema: {
    description: "get the list of customers",
    tags: ["customer"],
    querystring: {
      type: "object",
      properties: {
        page: { type: "number" },
        per_page: { type: "number" },
        q: { type: "string" },
      },
    },
    response: {
      200: {
        description: "List of customers",
        type: "object",
        properties: {
          pagination,
          customers: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                name: { type: "string" },
                door_no: { type: "string" },
                address: { type: "string" },
                city: { type: "string" },
                pincode: { type: "string" },
                taluk: { type: "string" },
                district: { type: "string" },
                mobile: { type: "string" },
                landline: { type: "string" },
                email: { type: "string" },
                created_at: { type: "string" },
                updated_at: { type: "string" },
              },
            },
          },
        },
      },
    },
  },
};

export default listCustomerRouterOpts;
