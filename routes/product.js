const router = require("express").Router();
const Product = require("../models/Product")
const {verifyAndAuthorizeToken, verifyAndAuthorizeAdminToken, verifyToken} = require("./verifyToken");

//all users can get product information (without token)
module.exports = router.get("/product/:id", async(req, res) => {
    try {
        const product = Product.findById(req.params.id, );
    } catch (error) {
        
    }
});