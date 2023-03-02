const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const referral_binary_users = new mongoose.Schema(
  {
    referral_id: { type: Schema.Types.ObjectId, ref: "referral_links" },
    referral: String,
    lvl: Number,
    user_id: { type: Schema.Types.ObjectId, ref: "account_meta" },
  },
  {
    timestamps: true,
  }
);

referral_binary_users.plugin(aggregatePaginate);
module.exports =
  mongoose.models.referral_binary_users ||
  mongoose.model("referral_binary_users", referral_binary_users);
