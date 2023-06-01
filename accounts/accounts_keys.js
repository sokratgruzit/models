const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const accounts_keys = new mongoose.Schema(
  {
    address: String,
    object_value: Object,
  },
  {
    timestamps: true,
  }
);
accounts_keys.plugin(aggregatePaginate);
module.exports =
  mongoose.models.accounts_keys ||
  mongoose.model("accounts_keys", accounts_keys);
