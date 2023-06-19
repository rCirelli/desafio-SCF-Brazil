const HttpException = require('../helpers/HttpException');
const { BAD_REQUEST } = require('../helpers/httpStatusCodes');

module.exports = function (parameterNames, validationType = 'all') {
  const validationTypes = {
    all: function (req, res, next) {
      parameterNames.forEach((parameter) => {
        if (!req.body[parameter]) {
          throw new HttpException(
            BAD_REQUEST,
            `'${parameter}' is required in request body`
          );
        }
      });
      next();
    },
    one: function (req, res, next) {
      let validParameters = false;

      parameterNames.forEach((parameter) => {
        if (req.body[parameter]) {
          validParameters = true;
        }
      });

      if (!validParameters) {
        throw new HttpException(
          BAD_REQUEST,
          `At least one of the following parameters are required in request body: ${parameterNames}`
        );
      }
      next();
    },
  };

  return validationTypes[validationType];
};
