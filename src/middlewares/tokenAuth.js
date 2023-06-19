const HttpException = require('../helpers/HttpException');
const jwtUtils = require('../helpers/JwtUtils');
const { UNAUTHORIZED } = require('../helpers/httpStatusCodes');
const services = require('../services');

const tokenAuth = (req, res, next) => {
  const token = req.get('authorization');
  const decoded = jwtUtils.decodeToken(token);

  try {
    services.auth.checkCredentials(decoded);
  } catch (error) {
    next();
  }

  next();
};

module.exports = tokenAuth;
