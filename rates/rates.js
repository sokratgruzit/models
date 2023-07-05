const mongoose = require("mongoose");

const ratesSchema = new mongoose.Schema(
  {
    btc: Number,
    eth: Number,
    usdt: Number,
    gold: Number,
    platinum: Number,
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
        btc: 0,
        eth: 0,
        usdt: 0,
        gold: 0,
        platinum: 0,
      });
      await initialRates.save();
    }
  } catch (error) {
    console.error("Error creating or checking initial rates document:", error);
  }
};
createInitialRates();

module.exports = Rates;
