const { BAD_REQUEST } = require("../utils/httpStatusCodes");
const services = require("../services");

module.exports = function(req, res) {
    const id = Number(req.query.id);
    const name = req.body.name;
    const job = req.body.job;

    if (!id) {
        return res.status(BAD_REQUEST).send({ message: "User id must be present in query parameters" });
    }

    if (!name && !job) {
        return res.status(BAD_REQUEST).send({ message: "name or job must be present in request body to be updated" });
    }

    try {
        const updatedUser = services.users.updateUser(id, name, job);
        return res.send(updatedUser);
    } catch (error) {
        next(error);
    }
};