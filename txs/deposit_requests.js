const mongoose = require("mongoose");

const deposit_requests = new mongoose.Schema(
  {
    from: String,
    amount: Number,
    amountTransferedFrom: String,
    selectedMethod: String,
    receivePaymentAddress: String,
    status: { String, default: "pending" },
    tx_fee: Number,
  },
  {
    timestamps: true,
  },
);
module.exports =
  mongoose.models.deposit_requests ||
  mongoose.model("deposit_requests", deposit_requests);
