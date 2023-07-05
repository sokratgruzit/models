const mongoose = require("mongoose");

const ratesSchema = new mongoose.Schema(
  {
    btc: { type: Object, default: {} },
    eth: { type: Object, default: {} },
    usdt: { type: Object, default: {} },
    gold: { type: Object, default: {} },
    platinum: { type: Object, default: {} },
  },
  {
    timestamps: true,
  },
);

const Rates = mongoose.models.rates || mongoose.model("rates", ratesSchema);

// Create an initial document in the "rates" collection if it doesn't exist
const createInitialRates = async () => {
  try {
    const existingRates = await Rates.findOne();

    if (!existingRates) {
      const initialRates = new Rates({
        btc: { value: 0 },
        eth: { value: 0 },
        usdt: { value: 0 },
        gold: { value: 0 },
        platinum: { value: 0 },
      });
      await initialRates.save();
    }
  } catch (error) {
    console.error("Error creating or checking initial rates document:", error);
  }
};
createInitialRates();

module.exports = Rates;
