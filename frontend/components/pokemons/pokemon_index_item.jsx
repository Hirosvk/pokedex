const React = require('react');
const hashHistory = require('react-router').hashHistory;

const PokemonIndexItem = React.createClass({
  showDetail() {
    hashHistory.push(`/pokemon/${this.props.id}`);
  },

  render() {
    return (
      <li className="poke-list-item" onClick={this.showDetail}>
        <p>Name: {this.props.name}</p>
        <p>Poke Type: {this.props.pokeType}</p>
      </li>
    );
  }
});

module.exports = PokemonIndexItem;
