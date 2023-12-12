const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const bcrypt = require("bcrypt");

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
    assets: {
      btc: { type: Number, default: 0 },
      eth: { type: Number, default: 0 },
      usdt: { type: Number, default: 0 },
      bnb: { type: Number, default: 0 },
      gold: { type: Number, default: 0 },
      platinum: { type: Number, default: 0 },
    },
    extensions: {},
    step: Number,
    stakedToday: Number,
    stakedThisMonth: Number,
    stakedTotal: Number,
    flush_out: {},
    tier: {},
    refresh_token_sessions: [],
    elite_member: String,
    ips: {
      type: [],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

accounts.pre("save", async function (next) {
  if (this.account_category === "main") {
    this.extensions = {
      trade: "false",
      tradeAdmin: "true",
      loan: "false",
      loanAdmin: "true",
      notify: "false",
      notifyAdmin: "true",
      staking: "false",
      stakingAdmin: "true",
      referral: "false",
      referralAdmin: "true",
      connect: "false",
      connectAdmin: "true",
    };
  }
});

accounts.plugin(aggregatePaginate);
module.exports =
  mongoose.models.accounts || mongoose.model("accounts", accounts);
