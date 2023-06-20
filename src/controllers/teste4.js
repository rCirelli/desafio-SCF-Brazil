const services = require("../services");

module.exports = function(req, res) {
    const id = Number(req.query.id);
    const name = req.body.name;
    const job = req.body.job;

    try {
        const updatedUser = services.users.updateUser(id, name, job);
        return res.send(updatedUser);
    } catch (error) {
        next(error);
    }
};