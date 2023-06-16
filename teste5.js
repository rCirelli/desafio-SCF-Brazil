const { reads, users } = require("./fakeData");


module.exports = function(req, res){
    
    const name = req.query.name;

    const { id } = users.find((user) => user.name === name);

    const readTimes = reads[id];

    res.send(`Usuário  ${name} foi lido ${readTimes} vezes.`);

};