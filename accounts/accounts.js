const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const accounts = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
      unique: true,
    },
    balance: Number,
    account_category: String,
    account_type_id: { type: Schema.Types.ObjectId, ref: "account_types" },
    account_owner: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
    staked: [],
  },
  {
    timestamps: true,
  },
);

if (accounts.path("account_category").enumValues.includes("system")) {
  accounts.add({
    extensions: {
      trade: {
        type: Boolean,
        default: false,
      },
      loan: {
        type: Boolean,
        default: false,
      },
      notify: {
        type: Boolean,
        default: false,
      },
      staking: {
        type: Boolean,
        default: false,
      },
      referral: {
        type: Boolean,
        default: false,
      },
      connect: {
        type: Boolean,
        default: process.env.REACT_APP_CONNECT === "true",
      },
    },
  });
}
accounts.plugin(aggregatePaginate);
module.exports = mongoose.models.accounts || mongoose.model("accounts", accounts);
