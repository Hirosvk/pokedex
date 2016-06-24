const React = require('react');
const PokemonActions = require('../../actions/pokemon_actions');
const hashHistory = require('react-router').hashHistory;

const PokemonForm = React.createClass({
  getInitialState() {
    return {};
  },

  _onChange(e) {
    const stateName = e.target.attributes.label.value;

    const stateObj = function() {
      let returnObj = {};
      returnObj[stateName] = e.target.value;
      return returnObj;
    }();

    this.setState( stateObj );

    console.log(this.state);
  },

  createPokemon(e) {
    e.preventDefault();

    let data = this.state;
    data["moves"] = [];
    data.moves.push(this.state.move1);
    data.moves.push(this.state.move2);

    PokemonActions.createPokemon( {"pokemon": data}, (id) => {
      hashHistory.push(`/pokemon/${id}`);
    });
  },

  render() {
    return (
      <form className="new-pokemon" onSubmit={this.createPokemon}>
        <label for="pokemon_name">Name:</label>
          <input type="text" onChange={this._onChange} value={this.state.name} label="name" key="name" id="pokemon_name"></input>
          <br/>
        <label for="image_url">Image URL:</label>
          <input type="text" onChange={this._onChange} value={this.state.image_url} label="image_url" key="image_url" id="image_url"></input>
          <br/>
        <label for="pokemon_poke_type">Type:</label>
          <select onChange={this._onChange} label="pokemon_poke_type" key="poke_type" id="poke_type">
            {
              window.pokemonTypes.map( type => {
                return <option value={type} key={type}>{type}</option>;
                })
              }
            </select>
            <br/>

        <label for="attack">Attack:</label>
          <input type="number" onChange={this._onChange} value={this.state.attack} label="attack" key="attack" id="attack"></input>
          <br/>
        <label for="defense">Defense:</label>
          <input type="number" onChange={this._onChange} value={this.state.defense} label="defense" key="defense" id="defense"></input>
          <br/>
        <label for="move1">Move #1:</label>
          <input type="text" onChange={this._onChange} value={this.state.move1} label="move1" key="move1" id="move1"></input>
          <br/>
        <label for="move2">Move #2:</label>
          <input type="text" onChange={this._onChange} value={this.state.move2} label="move2" key="move2" id="move2"></input>
          <br/>

        <button type="submit" value="Create Pokemon">Create Pokemon</button>
      </form>
    );
  }
});

module.exports = PokemonForm;
