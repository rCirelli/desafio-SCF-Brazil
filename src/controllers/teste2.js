const services = require("../services");

module.exports = function(req, res){
    const name = req.body.name;
    const job = req.body.job;

    const newUser = services.users.createUser(name, job);

    res.send(newUser);
};