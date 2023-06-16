const { users, reads } = require('../fakeData');
const User = require('../models/User');
const HttpException = require('../utils/HttpException');
const { NOT_FOUND } = require('../utils/httpStatusCodes');

function findByName(name) {
  const user = users.find((user) => user.name === name);

  if (!user) {
    throw new HttpException(NOT_FOUND, 'User not found');
  }

  return user;
}

function createUser(name, job) {
  const id = users.length + 1;
  const user = new User(id, name, job);

  users.push(user);

  return user;
}

function deleteUser(name) {
  const userToDelete = users.find((user, index) => {
    if (user.name === name) {
      users.splice(index, 1);
      return user;
    }
  });

  if (!userToDelete) {
    throw new HttpException(NOT_FOUND, 'User not found');
  }
}

function updateUser(id, newName = null, newJob = null) {
  const userIndexToUpdate = users.findIndex((user) => user.id === id);

  if (userIndexToUpdate === -1) {
    throw new HttpException(NOT_FOUND, 'User not found');
  }

  const userToUpdate = users[userIndexToUpdate];

  users[userIndexToUpdate] = {
    ...userToUpdate,
    name: newName || userToUpdate.name,
    job: newJob || userToUpdate.job,
  };

  return users[userIndexToUpdate];
}

function userReads(name) {
  const user = users.find((user) => user.name === name);

  if (!user) {
    throw new HttpException(NOT_FOUND, 'User not found');
  }

  const readTimes = reads[user.id];
  return readTimes;
}

module.exports = {
  findByName,
  createUser,
  deleteUser,
  updateUser,
  userReads,
};