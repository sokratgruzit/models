const mongoose = require("mongoose");

const stakes = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
      unique: true,
    },
    amount: Number,
    reward: Number,
    staketime: Number,
    unstaketime: Number,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.models.stakes || mongoose.model("stakes", stakes);
