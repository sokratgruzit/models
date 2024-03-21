const mongoose = require("mongoose");

const transaction_parameters_schema = new mongoose.Schema({
  parameter_id: {
    type: String,
    required: true,
    unique: true,
  },
  transaction_type: {
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
      "stellar_standard",
      "novice_navigator:",
      "expert_edge",
      "platinum_privilege",
      "diamond_vip"),
  },
  minimum_transaction_limit: {
    type: Number,
    required: true,
  },
  maximum_transaction_limit: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  base_currency: {
    type: String,
    required: true,
  },
  currency_conversion_rate: {
    type: Number,
    required: true,
  },
  effective_from_date: {
    type: Date,
    required: true,
  },
  effective_to_date: {
    type: Date,
    required: true,
  },
  last_updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.transaction_parameters ||
  mongoose.model("transaction_parameters", transaction_parameters_schema);
