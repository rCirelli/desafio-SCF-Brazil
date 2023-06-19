const { reads } = require('../fakeData');
const HttpException = require('../helpers/HttpException');
const { NOT_FOUND } = require('../helpers/httpStatusCodes');
const userService = require("./users");

function increase(userId) {
  reads[userId] += 1;
}

function getUserReads(userName) {
  const user = userService.findByName(userName);

  if (!user) {
    throw new HttpException(NOT_FOUND, 'User not found');
  }

  const readTimes = reads[user.id];
  return readTimes;
}

module.exports = {
  increase,
  getUserReads,
};
