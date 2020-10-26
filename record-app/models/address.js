const mongoose = require("mongoose");
const { Schema } = mongoose;

const AddressSchema = new Schema(
  {
    city: {
      type: String,
      required: false,
    },
    street: {
      type: String,
      required: false,
    },
    number: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = AddressSchema;
