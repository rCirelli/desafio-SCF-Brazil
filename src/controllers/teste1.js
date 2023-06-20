const { OK } = require("../helpers/httpStatusCodes");
const services = require("../services");

const getUser = ( req, res, next ) => {
    const name = req.query.name;

    try {
        const user = services.users.findByName(name);
        services.reads.increase(user.id);
        return res.status(OK).send({ user });
    } catch (error) {
        next(error);
    }
};

const getUsers = ( req, res, next ) => {
    const users = services.users.getAll();
    res.send(users);
};

module.exports = {
    getUser,
    getUsers
};