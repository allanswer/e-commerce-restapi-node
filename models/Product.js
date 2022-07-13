const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique:true },
        desc: { type: String, required: true },
        img: { type: String, required: true, unique:true },
        categories: { type: Array},
        size: { type: String },
        color: { type: Strin },
        price: { type: Number },
    },
    { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);