const { Schema, model, mongoose } = require("mongoose");

const user = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      requires: true,
    },
    roles: {
      type: String,
      ref: "role",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.user || mongoose.model("user", user);
