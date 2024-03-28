const mongoose = require("mongoose");

const globalSettingsSchema = new mongoose.Schema(
  {
    permission_to_register: {
      type: Boolean,
      default: true,
    },
    permission_to_login: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "last_updated" },
  }
);

module.exports =
  mongoose.models.global_settings ||
  mongoose.model("global_settings", globalSettingsSchema);
