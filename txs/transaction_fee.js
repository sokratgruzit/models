const mongoose = require("mongoose");

const transactionFeeSchema = new mongoose.Schema({
  transaction_type: {
    type: String,
    required: true,
    // enum: ['deposit', 'transfer', 'exchange', 'withdraw', 'internal_transfer', 'payment'],
  },
  description: {
    type: String,
    required: true,
  },
  fee_type: {
    type: String,
    required: true,
  },
  base_fee: {
    type: String,
    required: true,
  },
  fixed_fee: {
    type: String,
    required: true,
  },
  variable_fee_rate: {
    type: String,
    required: true,
  },
  fee_currency: {
    type: String,
    required: true,
  },
  base_fee_in_base_currency: {
    type: String,
    required: true,
  },
  base_currency: {
    type: String,
    required: true,
  },
  min_fee_in_base_currency: {
    type: String,
    required: true,
  },
  max_fee_in_base_currency: {
    type: String,
    required: true,
  },
  is_on_chain: {
    type: Boolean,
    required: true,
  },
  network: {
    type: String,
    required: true,
  },
  gas_limit: {
    type: String,
    required: true,
  },
  effective_fromDate: {
    type: String,
    required: true,
  },
  effective_to_date: {
    type: String,
    required: true,
  },
  user_tier: {
    type: String,
    required: true,
    enum:
      ("blocked",
      "all",
      "restricted",
      "Stellar Standard",
      "Novice Navigator:",
      "Expert Edge",
      "Platinum Privilege",
      "Diamond VIP"),
  },
  last_updated: {
    type: String,
  },
});

module.exports =
  mongoose.models.transaction_fee ||
  mongoose.model("transaction_fee", transactionFeeSchema);
