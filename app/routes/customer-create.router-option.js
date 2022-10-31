"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerCreateRouterOpts = void 0;
exports.customerCreateRouterOpts = {
    schema: {
        description: "create customer",
        tags: ["customer"],
        body: {
            type: "object",
            required: [
                "name",
                "email",
                "mobile",
                "door_no",
                "address",
                "city",
                "pin_code",
                "taluk",
                "district",
                "landline",
            ],
            properties: {
                id: { type: "number" },
                name: { type: "string" },
                door_no: { type: "string" },
                address: { type: "string" },
                city: { type: "string" },
                pin_code: { type: "string" },
                taluk: { type: "string" },
                district: { type: "string" },
                mobile: { type: "string" },
                landline: { type: "string" },
                email: { type: "string" },
            },
        },
        response: {
            200: {
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
                },
            },
        },
    },
};
exports.default = exports.customerCreateRouterOpts;
