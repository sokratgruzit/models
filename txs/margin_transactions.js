const mongoose = require("mongoose");

const margin_transactions = new mongoose.Schema(
  {
    address,
    colaterrol: number,
    leverage: nnumber,
    total_amount: number,
    borrowed_x: number,
    currency: String,
    currency_price: number,
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
