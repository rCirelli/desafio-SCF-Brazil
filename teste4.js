const data = require("./fakeData");
const { BAD_REQUEST, NOT_FOUND } = require("./httpStatusCodes");

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

    const userIndexToUpdate = data.findIndex((user) => user.id === id);

    if (userIndexToUpdate === -1) {
        return res.status(NOT_FOUND).send({ message: "user not found" });
    }

    const userToUpdate = data[userIndexToUpdate];

    data[userIndexToUpdate] = {
        ...userToUpdate,
        name: name || userToUpdate.name,
        job: job || userToUpdate.job,
    }

    return res.send(data[userIndexToUpdate]);
};