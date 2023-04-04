const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

// const accounts = new mongoose.Schema(
//   {
//     address: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     balance: Number,
//     account_category: String,
//     account_type_id: { type: Schema.Types.ObjectId, ref: "account_types" },
//     account_owner: {
//       type: String,
//     },
//     active: {
//       type: Boolean,
//       default: false,
//     },
//     staked: [],
//   },
//   {
//     timestamps: true,
//   },
// );

const eventSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
      unique: true,
    },
    balance: Number,
    account_category: String,
    account_type_id: { type: Schema.Types.ObjectId, ref: "account_types" },
    account_owner: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
    staked: [],
  },
  {
    timestamps: true,
    discriminatorKey: "account_category",
  },
);

const Event = mongoose.model("Event", eventSchema);

const externalTypeEvent = Event.discriminator(
  "external",
  new Schema({
    extensions: {
      trade: {
        type: Boolean,
        default: false,
      },
      loan: {
        type: Boolean,
        default: false,
      },
      notify: {
        type: Boolean,
        default: false,
      },
      staking: {
        type: Boolean,
        default: false,
      },
      referral: {
        type: Boolean,
        default: false,
      },
      connect: {
        type: Boolean,
        default: process.env.REACT_APP_CONNECT === "true",
      },
    },
  }),
);

module.exports = mongoose.models.accounts || mongoose.model("accounts", Event);
