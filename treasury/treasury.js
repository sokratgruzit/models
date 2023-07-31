const mongoose = require("mongoose");

const treasurySchema = new mongoose.Schema(
  {
    Incoming: { type: Object, default: {} },
    withdrawals: { type: Object, default: {} },
    withdrawalsAllowed: { type: Object, default: {} },
  },
  {
    timestamps: true,
  },
);

const Treasury = mongoose.models.treasury || mongoose.model("treasury", treasurySchema);

const createInitialTreasury = async () => {
  try {
    const existingTreasury = await Treasury.findOne();

    if (!existingTreasury) {
      const initialTreasury = new Treasury({
        incoming: { ATR: 0, BTC: 0, ETH: 0, USDC: 0, GOLD: 0, PLATINUM: 0 },
        withdrawals: { ATR: 0, BTC: 0, ETH: 0, USDC: 0, GOLD: 0, PLATINUM: 0 },
        withdrawalsAllowed: {
          ATR: false,
          BTC: false,
          ETH: false,
          USDC: false,
          GOLD: false,
          PLATINUM: false,
        },
      });
      await initialTreasury.save();
    }
  } catch (error) {
    console.error("Error creating or checking initial Treasury document:", error);
  }
};
createInitialTreasury();

module.exports = Treasury;
