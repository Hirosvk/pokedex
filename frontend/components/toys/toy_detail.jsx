const React = require('react');
const PokemonStore = require('../../stores/pokemon');

const ToyDetail = React.createClass({
  getInitialState() {
    return { details: this.getStateFromStore() };
  },

  getStateFromStore() {
    console.log("getStateFromStore() in toy_detail.jsx");
    let myToy = {};
    let poke = {};

    if (this.props.params.toyId) {
      poke = PokemonStore.find(this.props.params.pokemonId);

      if (poke.toys) {
        poke.toys.forEach( toy => {
          if (toy.id === parseInt(this.props.params.toyId)) {
            myToy = toy;
          }
        });
      }

      console.log("inside if loop in getStateFromStore() in toy_detail.jsx");
    }
    return myToy;
  },

  componentWillReceiveProps() {
    this._onChange();
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
    console.log("render() in toy_detail.jsx");
    const details = this.state.details;
    if (this.state.details){
      return (
        <div>
          <div className="toy-detail-pane">
            <div className="toy-detail">
              <img src={details.image_url} className="toy-image"></img>
              <p>Name: {details.name}</p>
              <p>Happiness: {details.happiness}</p>
              <p>Price: {details.price}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }

  }
});

module.exports = ToyDetail;
