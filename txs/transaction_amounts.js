const mongoose = require("mongoose");

const transactionAmountsSchema = new mongoose.Schema(
  {
    transaction_type: {
      type: String,
      required: true,
      // enum: ['deposit', 'transfer', 'exchange', 'withdraw', 'internal_transfer', 'payment'],
    },
    minimum_transaction_limit: {
      type: String,
      required: true,
    },
    maximum_transaction_limit: {
      type: String,
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
      type: String,
      required: true,
    },
    effective_from_date: {
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
      enum: [
        "blocked",
        "all",
        "restricted",
        "stellar_standard",
        "novice_navigator:",
        "expert_edge",
        "platinum_privilege",
        "diamond_vip",
      ],
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "last_updated" },
  }
);

module.exports =
  mongoose.models.transaction_amounts ||
  mongoose.model("transaction_amounts", transactionAmountsSchema);
