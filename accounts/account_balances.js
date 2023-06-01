const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const account_balances = new mongoose.Schema(
  {
    address: { type: Schema.Types.ObjectId, ref: "accounts" },
    asset: String,
    balance: Number,
  },
  {
    timestamps: true,
  }
);
account_balances.plugin(aggregatePaginate);
module.exports =
  mongoose.models.account_balances ||
  mongoose.model("account_balances", account_balances);
