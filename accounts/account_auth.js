const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const account_auth = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
      index: true,
      unique: true,
      dropDups: true,
    },
    password: String,
    otp_enabled: {
      type: Boolean,
      default: false,
    },
    otp_verified: {
      type: Boolean,
      default: false,
    },
    otp_ascii: String,
    otp_hex: String,
    otp_base32: String,
    otp_auth_url: String,
    remember_token: String,
    password_reset_code: String,
    keys: String,
  },
  {
    timestamps: true,
  },
);

account_auth.pre("save", async function (next) {
  if (!this.isModified || !this.password) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

account_auth.pre("updateOne", async function (next) {
  const update = this.getUpdate();
  if (!update.password) return next();

  const salt = await bcrypt.genSalt(10);
  update.password = await bcrypt.hash(update.password, salt);

  this.updateOne({}, update);
  next();
});

account_auth.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();
  if (!update.password) return next();

  const salt = await bcrypt.genSalt(10);
  update.password = await bcrypt.hash(update.password, salt);

  this.updateOne({}, update);
  next();
});

account_auth.methods.match_password = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

account_auth.index({ address: -1 }, { unique: true });

module.exports =
  mongoose.models.account_auth || mongoose.model("account_auth", account_auth);
