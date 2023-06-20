const HttpException = require('../helpers/HttpException');
const JwtUtils = require('../helpers/JwtUtils');
const { UNAUTHORIZED } = require('../helpers/httpStatusCodes');
const userService = require('./users');

function checkCredentials(decodedToken) {
  let user;

  try {
    user = userService.findByName(decodedToken.name);
  } catch (error) {
    throw new HttpException(UNAUTHORIZED, 'User not found');
  }
  if (user.job !== 'RH') {
    throw new HttpException(UNAUTHORIZED, 'Insufficient credentials');
  }
}

function generateToken(name, job) {
  let user;

  try {
    user = userService.findByName(name);
  } catch (error) {
    throw new HttpException(UNAUTHORIZED, 'User not found');
  }

  if (user.job !== job) {
    throw new HttpException(UNAUTHORIZED, "Invalid credentials");
  }
  const token = JwtUtils.generateToken(user);
  return token;
}

module.exports = {
  checkCredentials,
  generateToken,
};
