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
    account_owner: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
    assets: {},
    extensions: {},
    step: Number,
    stakedToday: Number,
    stakedThisMonth: Number,
    stakedTotal: Number,
    flush_out: {},
    tier: {},
  },
  {
    timestamps: true,
  },
);

accounts.pre("save", function (next) {
  if (this.account_category === "main") {
    this.extensions = {
      trade: "false",
      loan: "false",
      notify: "false",
      staking: "false",
      referral: "false",
      connect: "false",
    };
    this.assets = {
      btc: 0,
      eth: 0,
      usdt: 0,
      gold: 0,
      platinum: 0,
    };
  }

  next();
});

accounts.plugin(aggregatePaginate);
module.exports = mongoose.models.accounts || mongoose.model("accounts", accounts);
