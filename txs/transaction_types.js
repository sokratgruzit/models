const mongoose = require("mongoose");

const transaction_types = new mongoose.Schema(
  {
    name: String,
    tx_fee: Number,
  },
  {
    timestamps: true,
  }
);
module.exports =
  mongoose.models.transaction_types ||
  mongoose.model("transaction_types", transaction_types);
