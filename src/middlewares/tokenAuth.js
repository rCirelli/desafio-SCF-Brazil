const jwtUtils = require('../helpers/JwtUtils');
const services = require('../services');

const tokenAuth = (req, res, next) => {
  const token = req.get('authorization');
  const decoded = jwtUtils.decodeToken(token);

  try {
    services.auth.checkCredentials(decoded);
  } catch (error) {
    next(error);
  }

  next();
};

module.exports = tokenAuth;
