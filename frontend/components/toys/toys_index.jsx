const React = require('react');
const ToyIndexItem = require('./toy_index_item');

const ToyIndex = React.createClass({
  render() {
    console.log("render() in toys_index.jsx");

    if (this.props.toys) {
      return(
        <ul>
          {
            this.props.toys.map( toy => {
              return <ToyIndexItem toy={toy}
                        pokemonId={this.props.pokemonId}
                        key={toy.id}/>;
            })
          }
        </ul>
      );

    } else {
      return(
        <div></div>
      );
    }

  }
});

module.exports = ToyIndex;
