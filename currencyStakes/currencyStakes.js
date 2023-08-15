const mongoose = require("mongoose");

const currencyStakesSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
      min: 0,
    },
    expires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

module.exports =
  mongoose.models.currencyStakes ||
  mongoose.model("currencyStakes", currencyStakesSchema);
