const mongoose = require("mongoose");

const ratesSchema = new mongoose.Schema(
  {
    atr: { type: Object, default: {} },
    btc: { type: Object, default: {} },
    eth: { type: Object, default: {} },
    usdc: { type: Object, default: {} },
    gold: { type: Object, default: {} },
    platinum: { type: Object, default: {} },
  },
  {
    timestamps: true,
  },
);

const Rates = mongoose.models.rates || mongoose.model("rates", ratesSchema);

const createInitialRates = async () => {
  try {
    const existingRates = await Rates.findOne();

    if (!existingRates) {
      const initialRates = new Rates({
        atr: { usd: 0 },
        btc: { usd: 0 },
        eth: { usd: 0 },
        usdc: { usd: 0 },
        gold: { usd: 0 },
        platinum: { usd: 0 },
      });
      await initialRates.save();
    }
  } catch (error) {
    console.error("Error creating or checking initial rates document:", error);
  }
};
createInitialRates();

module.exports = Rates;
