const mongoose = require("mongoose");

const transactions = new mongoose.Schema(
  {
    from: String,
    to: String,
    amount: Number,
    tx_type: String,
    tx_hash: String,
    domination: Number,
    tx_status: String,
    tx_fee: Number,
    tx_fee_currency: String,
    tx_currency: String,
    tx_options: {},
  },
  {
    timestamps: true,
  },
);
module.exports =
  mongoose.models.transactions || mongoose.model("transactions", transactions);
