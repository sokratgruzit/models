const mongoose = require("mongoose");

const ratesSchema = new mongoose.Schema(
  {
    atr: { type: Object, default: {} },
    bnb: { type: Object, default: {} },
    btc: { type: Object, default: {} },
    eth: { type: Object, default: {} },
    usdt: { type: Object, default: {} },
    gold: { type: Object, default: {} },
    platinum: { type: Object, default: {} },
    stakingAPY: { type: Object, default: {} },
    onChainStakingApy: { type: Object, default: {} },
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
        atr: { usd: 2 },
        bnb: { usd: 0 },
        btc: { usd: 0 },
        eth: { usd: 0 },
        usdt: { usd: 0 },
        gold: { usd: 0 },
        platinum: { usd: 0 },
        stakingAPY: {
          bnb: {
            30: 1,
            90: 1,
            180: 1,
            360: 1,
          },
          btc: {
            30: 1,
            90: 1,
            180: 1,
            360: 1,
          },
          eth: {
          30: 1,
          90: 1,
          180: 1,
          360: 1,
          },
          usdt: {
          30: 1,
          90: 1,
          180: 1,
          360: 1,
          },
          gold: {
          30: 1,
          90: 1,
          180: 1,
          360: 1,
          },
          platinum: {
          30: 1,
          90: 1,
          180: 1,
          360: 1,
          },
        },
        onChainStakingApy: {
          type: Object,
          default: {
            365: 1,
            730: 1,
            1095: 1,
          },
        },
      });
      await initialRates.save();
    }
  } catch (error) {
    console.error("Error creating or checking initial rates document:", error);
  }
};
createInitialRates();

module.exports = Rates;
