var pokemonList = require('./pokemonData');

module.exports = {
    getPokemon: function(req, res) {
        res.json(pokemonList);
    }

}