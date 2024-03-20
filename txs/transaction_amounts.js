const mongoose = require("mongoose");

const transactionParametersSchema = new mongoose.Schema({
  ParameterID: {
    type: String,
    required: true,
    unique: true,
  },
  TransactionType: {
    type: String,
    required: true,
  },
  UserTier: {
    type: String,
    default: "all",
    required: true,
  },
  MinimumTransactionLimit: {
    type: Number,
    required: true,
  },
  MaximumTransactionLimit: {
    type: Number,
    required: true,
  },
  Currency: {
    type: String,
    required: true,
  },
  BaseCurrency: {
    type: String,
    required: true,
  },
  CurrencyConversionRate: {
    type: Number,
    required: true,
  },
  EffectiveFromDate: {
    type: Date,
    required: true,
  },
  EffectiveToDate: {
    type: Date,
    required: true,
  },
  LastUpdated: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.transaction_parameters ||
  mongoose.model("transaction_parameters", transactionParametersSchema);
