const React = require('react');
const PokemonStore = require('../../stores/pokemon');
const PokemonActions = require('../../actions/pokemon_actions');
const PokemonIndexItem = require('./pokemon_index_item');

const PokemonsIndex = React.createClass({
  getInitialState() {
    return { pokemons: PokemonStore.all() };
  },

  componentDidMount() {
    PokemonStore.addListener(this._onChange);
    PokemonActions.fetchAllPokemons();
  },

  componentWillUnmount() {
    PokemonStore.remove(this._onChange);
  },

  _onChange() {
    this.setState( {pokemons: PokemonStore.all()} );
  },

  render() {
    return (
      <ul>
        {
          this.state.pokemons.map(pokemon => {
            return (
              <PokemonIndexItem name={pokemon.name}
                    pokeType={pokemon.poke_type}
                    key={pokemon.id}
                    id={pokemon.id} />
                );
          })
        }
      </ul>
    );
  }
});

module.exports = PokemonsIndex;
