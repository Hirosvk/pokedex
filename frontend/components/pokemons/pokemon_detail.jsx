const React = require('react');
const PokemonStore = require('../../stores/pokemon');
const PokemonActions = require('../../actions/pokemon_actions');
const ToysIndex = require('../toys/toys_index');

const PokemonDetail = React.createClass({
  getInitialState() {
    return { details: this.getStateFromStore() };
  },

  getStateFromStore() {
    return PokemonStore.find(this.props.params.pokemonId);
  },

  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps(newProps) in pokemon_detail.jsx");
    PokemonActions.fetchPokemon(newProps.params.pokemonId);
  },

  componentDidMount() {
    PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    PokemonStore.remove(this._onChange);
  },

  _onChange() {
    this.setState({ details: this.getStateFromStore() });
  },

  render() {
    const details = this.state.details;
    console.log("render() in pokemon_detail.jsx");
    if (this.state.details) {
      return (
        <div>
          <div className="pokemon-detail-pane">
            <div className="detail">
              <img src={details.image_url}></img>
              <p>Name: {details.name}</p>
              <p>Attack: {details.attack}</p>
              <p>Defense: {details.defense}</p>
              <p>Poke-Type: {details.poke_type}</p>
              <p>Moves: {details.moves}</p>
            </div>

            <ToysIndex toys={details.toys} pokemonId={details.id} />
          </div>

          {this.props.children}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }

  }
});

module.exports = PokemonDetail;
