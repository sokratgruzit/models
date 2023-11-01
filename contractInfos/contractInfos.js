const mongoose = require("mongoose");

const contractInfosSchema = new mongoose.Schema(
  {
    apys: { type: Array, default: [] }
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
        apys: [],
      });
      await initialInfo.save();
    }
  } catch (error) {
    console.error("Error creating or checking initial contract infos document:", error);
  }
};
createInitialInfo();

module.exports = ContractInfos;
