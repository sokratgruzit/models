const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const referral_binary_users = new mongoose.Schema(
  {
    referral_address: String,
    lvl: Number,
    user_address: String,
    position: Number,
  },
  {
    timestamps: true,
  }
);

referral_binary_users.plugin(aggregatePaginate);
module.exports =
  mongoose.models.referral_binary_users ||
  mongoose.model("referral_binary_users", referral_binary_users);
