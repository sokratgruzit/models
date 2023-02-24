const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const referral_uni_users = new mongoose.Schema(
  {
    referral_id: { type: Schema.Types.ObjectId, ref: "referral_links" },
    referral: String,
    user_id: { type: Schema.Types.ObjectId, ref: "account_meta" },
  },
  {
    timestamps: true,
  }
);

referral_uni_users.plugin(aggregatePaginate);
module.exports =
  mongoose.models.referral_uni_users ||
  mongoose.model("referral_uni_users", referral_uni_users);
