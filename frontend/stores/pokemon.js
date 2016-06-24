const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const PokemonConstants = require('../constants/pokemon_constants');

let _pokemons = {};

const PokemonStore = new Store(Dispatcher);

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      this.resetPokemons(payload.pokemons);
      this.__emitChange();
      break;
    case PokemonConstants.UPDATE_SINGLE_POKEMON:
      this.updatePokemon(payload.pokemon);
      this.__emitChange();
      break;
  }
};

PokemonStore.updatePokemon = function(pokemon) {
  const id = pokemon.id;
  _pokemons[id] = pokemon;
};


PokemonStore.find = function(id) {
  if (typeof id === "string") {
    id = parseInt(id);
  }

  return _pokemons[id];
};

PokemonStore.all = function() {
  let pokemons = [];

  for (let p_id in _pokemons) {
    pokemons.push(_pokemons[p_id]);
  }
  return pokemons;
};

PokemonStore.resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach(pokemon => {
    _pokemons[pokemon.id] = pokemon;
  });
};

module.exports = PokemonStore;
