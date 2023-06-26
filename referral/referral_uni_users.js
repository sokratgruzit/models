const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const referral_uni_users = new mongoose.Schema(
  {
    referral_address: String,
    user_address: String,
    lvl: Number,
  },
  {
    timestamps: true,
  }
);

referral_uni_users.plugin(aggregatePaginate);
module.exports =
  mongoose.models.referral_uni_users ||
  mongoose.model("referral_uni_users", referral_uni_users);
