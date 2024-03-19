const mongoose = require("mongoose");

const transactionFeeSchema = new mongoose.Schema (

    {
        TransactionType: {
            type: String,
            required: true,
            enum: ['deposit', 'transfer', 'exchange', 'withdraw', 'internal_transfer', 'payment'],
        },
          Description: {
            type: String,
            required: true,
        },
          FeeType: {
            type: String,
            required: true,
        },
          BaseFee: {
            type: String,
            required: true,
        },
          FixedFee: {
            type: String,
            required: true,
        },
          VariableFeeRate: {
            type: String,
            required: true,
        },
          FeeCurrency: {
            type: String,
            required: true,
        },
          BaseFeeInBaseCurrency: {
            type: String,
            required: true,
        },
          BaseCurrency: {
            type: String,
            required: true,
        },
          MinFeeInBaseCurrency: {
            type: String,
            required: true,
        },
          MaxFeeInBaseCurrency: {
            type: String,
            required: true,
        },
          IsOnChain: {
            type: Boolean,
            required: true,
        },
          Network: {
            type: String,
            required: true,
        }, 
         GasLimit: {
            type: String,
            required: true,
        },
          LastUpdated: {
            type: String,
            required: true,
        }
    }
);

module.exports = mongoose.models.transactionFee || mongoose.model("transactionFee", transactionFeeSchema);
