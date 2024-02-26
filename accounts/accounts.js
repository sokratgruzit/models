const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const bcrypt = require("bcrypt");

const accounts = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
      default: "#1"
    },
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
      btc: {type: Number, default: 0},
      eth: {type: Number, default: 0},
      usdt: {type: Number, default: 0},
      bnb: {type: Number, default: 0},
      gold: {type: Number, default: 0},
      trx: {type: Number, default: 0},
      btcStaked: {type: Number, default: 0},
      ethStaked: {type: Number, default: 0},
      usdtStaked: {type: Number, default: 0},
      bnbStaked: {type: Number, default: 0},
      goldStaked: {type: Number, default: 0},
      trxStaked: {type: Number, default: 0},
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
    if (!this.userId) {
      // Find the last document and get its userId
      const lastDocument = await this.constructor.findOne({}, {}, { sort: { userId: -1 } });
      const lastUserId = lastDocument ? parseInt(lastDocument.userId.slice(1)) : 0;
      
      // Increment the last userId and set it for the current document
      this.userId = `#${lastUserId + 1}`;
    }

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

  next();
});

// Function to update main accounts with userId
accounts.statics.updateMainAccounts = async function() {
  try {
    const mainAccountsWithoutUserId = await this.find({ account_category: "main", userId: { $exists: false } });
    for (const account of mainAccountsWithoutUserId) {
      const lastDocument = await this.findOne({ account_category: "main" }, {}, { sort: { userId: -1 } });
      const lastUserId = lastDocument ? parseInt(lastDocument.userId.slice(1)) : 0;
      account.userId = `#${lastUserId + 1}`;
      await account.save();
    }
    console.log("Main accounts updated successfully.");
  } catch (error) {
    console.error("Error updating main accounts:", error);
  }
};

accounts.plugin(aggregatePaginate);

module.exports =
  mongoose.models.accounts || mongoose.model("accounts", accounts);
