const Dispatcher = require('../dispatcher/dispatcher');
const PokemonConstants = require('../constants/pokemon_constants');
const ApiUtil = require('../util/api_util');

const PokemonActions = {
  receiveAllPokemons(pokemons) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  fetchAllPokemons() {
    ApiUtil.fetchAllPokemons(this.receiveAllPokemons);
  },

  fetchPokemon(id) {
    console.log("fetchPokemon(id) in pokemon_actions.js");
    ApiUtil.fetchPokemon(id, this.receiveSinglePokemon);
  },

  receiveSinglePokemon(pokemon) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.UPDATE_SINGLE_POKEMON,
      pokemon: pokemon
    });
  },

  createPokemon(pokemonState, callback) {
    ApiUtil.createPokemon(pokemonState, callback, this.receiveSinglePokemon);
  }

};

module.exports = PokemonActions;
