//checkToken
const jwt = require('jsonwebtoken');
const jwtSecretKey = 'bdhzdhjzavdhzadzadhzauihezuaheuizaeh';

module.exports = (req, res, next) => {

    //const token = req.headers.authorization;
    //split token 
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        res.status(401).json("Accès refusé");
    } else {
        jwt.verify(token, jwtSecretKey, (err, decoded) => {
            if (err) {
                res.status(401).json("Accès refusé");
            } else {
                next();
            }
        });
    }
};
