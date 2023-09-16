const mongoose = require("mongoose");

const verify_txs = new mongoose.Schema(
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
    code: String,
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.models.verify_txs || mongoose.model("verify_txs", verify_txs);
