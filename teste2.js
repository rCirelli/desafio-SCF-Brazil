const { users } =  require("./fakeData");
const { BAD_REQUEST } = require("./httpStatusCodes");

module.exports = function(req, res){
    const name = req.body.name;
    const job = req.body.job;
    const id = users.length + 1;

    if (!name || !job) {
        return res.status(BAD_REQUEST).send({ message: "'name' and 'job' fields are required"});
    }

    const newUser = {
        id,
        name: name,
        job: job,
    }

    users.push(newUser)

    res.send(newUser);
};