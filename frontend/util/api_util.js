
function fetchAllPokemons(callback) {
  $.ajax({
    url: "api/pokemon",
    type: "GET",
    dataType: "JSON",
    success: function(pokemon) {
      callback(pokemon);
      console.log("fetchAllPokemons() in api_util.js");
    }

  });
}

function fetchPokemon(id, callback) {
  $.ajax({
    url: `api/pokemon/${id}`,
    type: "GET",
    dataType: "JSON",
    success: function(pokemon) {
      callback(pokemon);
    }
  });
}

function createPokemon(pokemonState, callback, receiveSinglePokemon) {
  $.ajax({
    url: 'api/pokemon',
    type: "POST",
    data: pokemonState,
    success: function(pokemon) {
      callback(pokemon.id);
      receiveSinglePokemon(pokemon);
    },
    error: function(pokemon) {
      console.log(pokemon);
    }
  });
}

module.exports = { fetchAllPokemons : fetchAllPokemons,
                    fetchPokemon: fetchPokemon,
                    createPokemon: createPokemon };
