const { users, reads } = require("../fakeData");
const { BAD_REQUEST, OK } = require("../utils/httpStatusCodes");
const services = require("../services");

const getUser = ( req, res, next ) => {
    const name = req.query.name;

    if (!name) {
        return res.status(BAD_REQUEST).send({ message: "User name must be present in query parameters" });
    }

    try {
        const user = services.users.findByName(name);
        reads[user.id] += 1;
        return res.status(OK).send({ user });
    } catch (error) {
        next(error);
    }
};

const getUsers = ( req, res, next ) => {
    res.send(users);
};

module.exports = {
    getUser,
    getUsers
};