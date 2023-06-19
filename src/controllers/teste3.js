const { BAD_REQUEST } = require("../helpers/httpStatusCodes");
const services = require("../services");

module.exports = function(req, res, next) {
    const name = req.query.name;

    try {
        services.users.deleteUser(name);
    } catch (error) {
        return next(error);
    }

    res.send("success");
};