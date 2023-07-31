const mongoose = require("mongoose");

const treasuriesSchema = new mongoose.Schema(
  {
    incoming: { type: Object, default: {} },
    withdrawals: { type: Object, default: {} },
  },
  {
    timestamps: true,
  },
);

const Treasuries =
  mongoose.models.treasuries || mongoose.model("treasuries", treasuriesSchema);

const createInitialTreasuries = async () => {
  try {
    const existingTreasuries = await Treasuries.findOne();

    if (!existingTreasuries) {
      const initialTreasuries = new Treasuries({
        incoming: { ATR: 0, BTC: 0, ETH: 0, USDC: 0, GOLD: 0, PLATINUM: 0 },
        withdrawals: { ATR: 0, BTC: 0, ETH: 0, USDC: 0, GOLD: 0, PLATINUM: 0 },
      });
      await initialTreasuries.save();
    }
  } catch (error) {
    console.error("Error creating or checking initial Treasury document:", error);
  }
};
createInitialTreasuries();

module.exports = Treasuries;
