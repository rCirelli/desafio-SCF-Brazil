const errorHandler = require('./middlewares/errorHandler');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const teste1 = require("./controllers/teste1");
const teste2 = require("./controllers/teste2");
const teste3 = require("./controllers/teste3");
const teste4 = require("./controllers/teste4");
const teste5 = require("./controllers/teste5");


app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2)
app.delete("/users", teste3)
app.put("/users", teste4)
app.get("/users/access", teste5);

app.use(errorHandler);

const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});