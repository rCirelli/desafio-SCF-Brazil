const jwtUtils = require('../helpers/JwtUtils');

const tokenAuth = (req, res, next) => {
  const token = req.get('authorization');
  jwtUtils.decodeToken(token);
  next();
};

module.exports = tokenAuth;