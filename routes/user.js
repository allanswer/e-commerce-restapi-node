const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const {verifyToken, verifyAndAuthorizeToken} = require("./verifyToken");

//update
router.put("/:id", verifyAndAuthorizeToken, async(req, res) => {
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.PASS_SEC)
            .toString()
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
        {new:true}); // set true to return new document
        res.status(200).json(updatedUser)

    } catch (error) {
        res.status(500).json(err);
        
    }
     
})

module.exports =router;
 