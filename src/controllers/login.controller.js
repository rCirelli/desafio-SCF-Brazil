const services = require("../services");

function loginController( req, res, next ) {
    const name = req.body.name;
    const job = req.body.job;

    try {
        const token = services.auth.generateToken(name, job);
        return res.send({ token });
    } catch (error) {
        next(error);
    }
};

module.exports = {
  loginController,
};