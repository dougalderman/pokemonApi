var express = require('express');
var bodyParser = require('body-parser');
pokemonCtrl = require('./pokemonCtrl')

var app = express();
port = 3000;

app.use(bodyParser.json());

app.get('/pokemon', pokemonCtrl.getPokemon);

app.listen(port, function() {
    console.log('listening to port ', port);
});