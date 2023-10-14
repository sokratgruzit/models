const mongoose = require("mongoose");

const contractInfosSchema = new mongoose.Schema(
  {
    cates: { type: Array, default: [] },
  },
  {
    timestamps: true,
  },
);

module.exports =
  mongoose.models.contractInfos || mongoose.model("contractInfos", contractInfosSchema);
