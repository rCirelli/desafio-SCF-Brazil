const HttpException = require('../helpers/HttpException');
const { UNAUTHORIZED } = require('../helpers/httpStatusCodes');
const userService = require('./users');

function checkCredentials(decodedToken) {
  try {
    userService.findByName(decodedToken.name);
  } catch (error) {
    throw new HttpException(UNAUTHORIZED, 'User not found');
  }

  if (job !== 'RH') {
    throw new HttpException(UNAUTHORIZED, 'Insufficient credentials');
  }
}

module.exports = {
  checkCredentials,
};
