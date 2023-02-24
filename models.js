// account models
const account_auth = require("./accounts/account_auth");
const account_meta = require("./accounts/account_meta");
const account_types = require("./accounts/account_types");
const accounts = require("./accounts/accounts");
const verified_emails = require("./accounts/verified_emails");

// extentions models
const extentions_config = require("./extentions/extentions_config");

// tx models
const transaction_types = require("./txs/transaction_types");
const transactions = require("./txs/transactions");

// options
const options = require("./options");

// admin models
const role = require("./admin/role");
const menu = require("./admin/menu");
const user = require("./admin/user");

// referral models
const referral_links = require("./referral/referral_links");
const referral_uni_users = require("./referral/referral_uni_users");

module.exports = {
  accounts,
  account_auth,
  account_meta,
  account_types,
  verified_emails,
  extentions_config,
  transaction_types,
  transactions,
  options,
  role,
  menu,
  user,
  referral_links,
  referral_uni_users,
};
