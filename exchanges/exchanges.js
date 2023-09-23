const mongoose = require("mongoose");

const exchanges = new mongoose.Schema(
  {
    exchangeId: String,
    address: String,
    amount: Number,
    status: String,
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.models.exchanges || mongoose.model("exchanges", exchanges);
