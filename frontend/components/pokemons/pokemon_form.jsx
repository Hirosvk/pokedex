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
  },

  createPokemon(e) {
    e.preventDefault();

    let newPoke = this.state;
    newPoke["moves"] = [this.state.move1, this.state.move2];
    delete newPoke.move1;
    delete newPoke.move2;

    PokemonActions.createPokemon( {"pokemon": newPoke}, (id) => {
      hashHistory.push(`/pokemon/${id}`);
    });
  },

  render() {
    return (
      <form className="new-pokemon" onSubmit={this.createPokemon}>
        <label>Name:
          <input type="text" onChange={this._onChange} value={this.state.name} label="name" key="name"/>
        </label>
          <br/>
        <label>Image URL:
          <input type="text" onChange={this._onChange} value={this.state.image_url} label="image_url" key="image_url"/>
        </label>
          <br/>
        <label>Type:
          <select onChange={this._onChange} label="poke_type" key="poke_type">
            {
              window.pokemonTypes.map( type => {
                return <option value={type} key={type}>{type}</option>;
                })
              }
            </select>
          </label>
            <br/>

        <label>Attack:
          <input type="number" onChange={this._onChange} value={this.state.attack} label="attack" key="attack"/>
        </label>
          <br/>
        <label>Defense:
          <input type="number" onChange={this._onChange} value={this.state.defense} label="defense" key="defense"/>
        </label>
          <br/>
        <label>Move #1:
          <input type="text" onChange={this._onChange} value={this.state.move1} label="move1" key="move1" />
        </label>
          <br/>
        <label>Move #2:
          <input type="text" onChange={this._onChange} value={this.state.move2} label="move2" key="move2" />
        </label>
          <br/>

        <button type="submit" value="Create Pokemon">Create Pokemon</button>
      </form>
    );
  }
});

module.exports = PokemonForm;
