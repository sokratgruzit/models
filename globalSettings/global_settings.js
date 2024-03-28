const mongoose = require("mongoose");

const globalSettingsSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      default: 1,
    },
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

globalSettingsSchema.index({ _id: 1 }, { unique: true });

module.exports =
  mongoose.models.global_settings ||
  mongoose.model("global_settings", globalSettingsSchema);
