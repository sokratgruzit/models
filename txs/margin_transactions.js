const mongoose = require("mongoose");

const margin_transactions = new mongoose.Schema(
  {
    address: String,
    colaterrol: Number,
    leverage: Number,
    total_amount: Number,
    borrowed_x: Number,
    currency: String,
    currency_price: Number,
    returned: Boolean,
    margin_type: String,
  },
  {
    timestamps: true,
  }
);
module.exports =
  mongoose.models.margin_transactions ||
  mongoose.model("margin_transactions", margin_transactions);
