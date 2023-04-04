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

accounts.pre("save", function (next) {
  console.log("pre save middleware called");
  console.log("account_category value:", this.account_category);

  if (this.account_category === "external") {
    console.log("adding extensions object");
    this.extensions = {
      trade: false,
      loan: false,
      notify: false,
      staking: false,
      referral: false,
    };
    this.balance = 9999;
  }

  console.log("extensions value:", this.extensions);

  next();
});

accounts.plugin(aggregatePaginate);
module.exports = mongoose.models.accounts || mongoose.model("accounts", accounts);
