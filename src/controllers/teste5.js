const services = require("../services");

module.exports = function(req, res, next){
    const name = req.query.name;

    try {
        const reads = services.reads.getUserReads(name);
        res.send(`Usuário ${name} foi lido ${reads} vezes.`);
    } catch (error) {
        next(error);
    }
};