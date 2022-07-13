const mongoose = require("mongoose");
const { object } = require("webidl-conversions");

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: {
                    type: String
                },
                quanity: {
                    type: Number,
                    default: 1
                }
            },
        ],
        amoount: { type: Number, required: true },
        address: { type: object, required: true },
        status: { type: String, default: "pending" }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Order", OrderSchema);