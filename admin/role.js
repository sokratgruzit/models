const { Schema, model, mongoose } = require("mongoose");

const role = new Schema(
  {
    value: {
      type: String,
      unique: true,
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.role || mongoose.model("role", role);
