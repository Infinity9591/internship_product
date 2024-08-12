const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.body.token;

    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(verified);
        next();
    } catch (err) {
        return res.status(400).send('Invalid Token');
    }
};

module.exports = verifyToken;
