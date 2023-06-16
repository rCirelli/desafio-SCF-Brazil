const { users } = require("./fakeData");
const { BAD_REQUEST, NOT_FOUND } = require("./httpStatusCodes");

module.exports = function(req, res) {
    const name = req.query.name;

    if (!name) {
        return res.status(BAD_REQUEST).send({ message: "User name must be present in query parameters" });
    }

    const userToDelete = users.find((user, index) => {
        if (user.name === name) {
            users.splice(index, 1);
            return user;
        }
    });

    if (!userToDelete) {
        return res.status(NOT_FOUND).send({ message: "User name not found" });
    }

    res.send("success");
};