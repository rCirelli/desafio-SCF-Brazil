const services = require("../services");

module.exports = function(req, res, next){
    const name = req.query.name;

    if (!name) {
        return res.status(BAD_REQUEST).send({ message: "User name must be present in query parameters" });
    }

    try {
        const reads = services.users.userReads(name);
        res.send(`Usuário ${name} foi lido ${reads} vezes.`);
    } catch (error) {
        next(error);
    }
};