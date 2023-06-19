const HttpException = require("../helpers/HttpException");
const { BAD_REQUEST } = require("../helpers/httpStatusCodes");

module.exports = function(parameterNames) {
  return function(req, res, next) {
    parameterNames.forEach((parameter) => {
      if (!req.query[parameter]) {
        throw new HttpException(BAD_REQUEST, `Query parameter '${parameter}' is not defined`);
      }
    });

    next();
  }
};