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
  if (this.account_category === "external") {
    this.extensions = {
      trade: false,
      loan: false,
      notify: false,
      staking: false,
      referral: false,
    };
  }
  next();
});

accounts.plugin(aggregatePaginate);
module.exports = mongoose.models.accounts || mongoose.model("accounts", accounts);
