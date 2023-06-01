const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const referral_links = new mongoose.Schema(
  {
    account_id: { type: Schema.Types.ObjectId, ref: "accounts_meta" },
    referral: {
      type: String,
      required: true,
      index: true,
      unique: true,
      dropDups: true,
    },
    referral_type: { type: String },
  },
  {
    timestamps: true,
  }
);
referral_links.index({ referral: -1 }, { unique: true });

referral_links.plugin(aggregatePaginate);
module.exports =
  mongoose.models.referral_links ||
  mongoose.model("referral_links", referral_links);
