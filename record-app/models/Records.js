//
// SCHEMA

const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecordsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Record", RecordsSchema);
