const mongoose = require("mongoose");

const contractInfosSchema = new mongoose.Schema(
  {
    atr: { type: Object, default: {} },
  },
  {
    timestamps: true,
  },
);

const ContractInfos =
  mongoose.models.contractInfos || mongoose.model("contractInfos", contractInfosSchema);

const createInitialInfo = async () => {
  try {
    const existingInfo = await ContractInfos.findOne();

    if (!existingInfo) {
      const initialInfo = new ContractInfos({
        atr: { usd: 2 },
        btc: { usd: 0 },
        eth: { usd: 0 },
        usdc: { usd: 0 },
        gold: { usd: 0 },
        bnb: { usd: 0 },
        platinum: { usd: 0 },
        stakingAPY: {
          type: Object,
          default: {
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
      await initialInfo.save();
    }
  } catch (error) {
    console.error("Error creating or checking initial contract infos document:", error);
  }
};
createInitialInfo();

module.exports = ContractInfos;
