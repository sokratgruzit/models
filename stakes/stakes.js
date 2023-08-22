const mongoose = require("mongoose");

const stakes = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    amount: Number,
    reward: Number,
    staketime: Number,
    unstaketime: Number,
    bv_placed: Boolean,
    uni_placed: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.stakes || mongoose.model("stakes", stakes);
