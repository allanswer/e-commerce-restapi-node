const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authToken = req.headers.token;
    if(authToken) {
        const token = authToken.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if(err) {
                res.status(401).json("Invalid token")
            } else {
                req.user = user;
                next();
            }
        });
       
    } else {
        res.status(401).json("Unauthorized!");
    }
}

const verifyAndAuthorizeToken = (req, res, next) => {
    verifyToken(req, res, () => {
       if(req.user.id === req.params.id || req.user.isAdmin) {
        next();
       } else {
        res.status(403).json("You can only modify your own data !");
       }
    })
    
}

module.exports = {verifyToken, verifyAndAuthorizeToken};