const jwt = require('jsonwebtoken');
const secret = 'shhhhh';
const withAuth = function(req, res, next) {
    const token = req.headers['authorization'].replace(/^JWT\s/, '');

    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                res.status(401).send('Unauthorized: Invalid token');
            } else {
                req.contato = decoded.contato;
                next();
            }
        });
    }
}
module.exports = withAuth;