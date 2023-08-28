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
    refresh_token: String,
  },
  {
    timestamps: true,
  },
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
    this.assets = {
      btc: 0,
      eth: 0,
      usdc: 0,
      gold: 0,
      platinum: 0,
    };

    if (!this.isModified || !this.refresh_token) {
      next();
    }

    const salt = await bcrypt.genSalt(10);
    this.refresh_token = await bcrypt.hash(this.refresh_token, salt);
  }
});

accounts.plugin(aggregatePaginate);
module.exports = mongoose.models.accounts || mongoose.model("accounts", accounts);
