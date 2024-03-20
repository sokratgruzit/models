const mongoose = require("mongoose");

const transactions = new mongoose.Schema(
  {
    from: String,
    to: String,
    account_metas: Object,
    amount: Number,
    tx_type: String,
    tx_hash: String,
    tx_external_hash: String,
    domination: Number,
    A1_price: Number,
    tx_status: String,
    tx_fee: Number,
    tx_fee_currency: String,
    tx_currency: String,
    tx_options: Object,
    exchange_id: String,
    exchange_create_object: {},
    exchange_get_object: {},
  },
  {
    timestamps: true,
  }
);
module.exports =
  mongoose.models.transactions || mongoose.model("transactions", transactions);
