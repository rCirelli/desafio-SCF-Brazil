const data =  require("./fakeData");
const { BAD_REQUEST, NOT_FOUND, OK } = require("./httpStatusCodes");

const getUser = ( req, res, next ) => {
    const name = req.query.name;

    if (!name) {
        return res.status(BAD_REQUEST).send({ message: "User name must be present in query parameters" });
    }

    const user = data.find((user) => user.name === name);

    if (!user) {
        return res.status(NOT_FOUND).send({ message: "User name not found" });
    }

    return res.status(OK).send({ user });
};

const getUsers = ( req, res, next ) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};