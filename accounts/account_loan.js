const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const account_loan = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
      unique: true,
    },
    balance: Number,
    account_type_id: { type: Schema.Types.ObjectId, ref: "account_types" },
    account_owner: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);
account_loan.plugin(aggregatePaginate);
module.exports =
  mongoose.models.account_loan || mongoose.model("account_loan", account_loan);
