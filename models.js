// account models
const account_auth = require("./accounts/account_auth");
const account_meta = require("./accounts/account_meta");
const accounts_keys = require("./accounts/accounts_keys");
const accounts = require("./accounts/accounts");
const deposit_requests = require("./txs/deposit_requests");
const stakes = require("./stakes/stakes");
const rates = require("./rates/rates");
const treasuries = require("./treasuries/treasuries");
const currencyStakes = require("./currencyStakes/currencyStakes");
const verify_txs = require("./txs/verify_txs");
const exchanges = require("./exchanges/exchanges");

// extentions models
const extentions_config = require("./extentions/extentions_config");

// tx models
const transaction_types = require("./txs/transaction_types");
const transactions = require("./txs/transactions");
const transaction_fee = require("./txs/transaction_fee");
const margin_transactions = require("./txs/margin_transactions");

// options
const options = require("./options");

// admin models
const role = require("./admin/role");
const menu = require("./admin/menu");
const user = require("./admin/user");

// referral models
const referral_uni_users = require("./referral/referral_uni_users");
const referral_binary_users = require("./referral/referral_binary_users");

module.exports = {
  accounts,
  account_auth,
  account_meta,
  accounts_keys,
  extentions_config,
  transaction_types,
  transactions,
  margin_transactions,
  options,
  transaction_fee,
  role,
  menu,
  user,
  referral_uni_users,
  referral_binary_users,
  deposit_requests,
  stakes,
  rates,
  treasuries,
  currencyStakes,
  verify_txs,
  exchanges
};
