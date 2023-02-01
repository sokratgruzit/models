const mongoose = require("mongoose");

const extentions_config = new mongoose.Schema(
  {
    name: String,
    data: Array,
  },
  {
    timestamps: true,
  }
);
module.exports =
  mongoose.models.extentions_config ||
  mongoose.model("extentions_config", extentions_config);
