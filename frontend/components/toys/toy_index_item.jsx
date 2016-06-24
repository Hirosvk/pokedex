const React = require('react');
const hashHistory = require('react-router').hashHistory;

const ToyIndexItem = React.createClass({
  showToy() {
    hashHistory.push(`/pokemon/${this.props.pokemonId}/toys/${this.props.toy.id}`);
  },

  render() {
    console.log("render() in toy_index_item.jsx");
    return (
      <li className="toy-list-item" onClick={this.showToy}>
        <p>Name: {this.props.toy.name}</p>
        <p>Happiness: {this.props.toy.happiness}</p>
        <p>Price: {this.props.toy.price}</p>
      </li>
    );
  }
});

module.exports = ToyIndexItem;
