const { users, reads } =  require("./fakeData");
const { BAD_REQUEST, NOT_FOUND, OK } = require("./httpStatusCodes");

const getUser = ( req, res, next ) => {
    const name = req.query.name;

    if (!name) {
        return res.status(BAD_REQUEST).send({ message: "User name must be present in query parameters" });
    }

    const user = users.find((user) => user.name === name);
    reads[user.id] += 1;

    if (!user) {
        return res.status(NOT_FOUND).send({ message: "User name not found" });
    }

    return res.status(OK).send({ user });
};

const getUsers = ( req, res, next ) => {
    res.send(users);
};

module.exports = {
    getUser,
    getUsers
};