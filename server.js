var express = require('express');


var bodyParser = require('body-parser')
var app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname + '/'));

let indexRouter = require('./routes/index-route');
app.use('/',indexRouter);

app.listen(3001,function(){
    console.log("Servidor rodando");
}); 