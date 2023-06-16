const { BAD_REQUEST } = require("../utils/httpStatusCodes");
const services = require("../services");

module.exports = function(req, res, next) {
    const name = req.query.name;

    if (!name) {
        return res.status(BAD_REQUEST).send({ message: "User name must be present in query parameters" });
    }

    try {
        services.users.deleteUser(name);
    } catch (error) {
        return next(error);
    }

    res.send("success");
};