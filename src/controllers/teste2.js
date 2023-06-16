const { BAD_REQUEST } = require("../utils/httpStatusCodes");
const services = require("../services");

module.exports = function(req, res){
    const name = req.body.name;
    const job = req.body.job;

    if (!name || !job) {
        return res.status(BAD_REQUEST).send({ message: "'name' and 'job' fields are required"});
    }

    const newUser = services.users.createUser(name, job);

    res.send(newUser);
};