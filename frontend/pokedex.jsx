const React = require('react');
const ReactDOM = require('react-dom');
const PokemonStore = window.PokemonStore = require('./stores/pokemon.js');
const PokemonActions = require('./actions/pokemon_actions');
const PokemonIndex = require('./components/pokemons/pokemons_index');
const PokemonDetail = require('./components/pokemons/pokemon_detail');
const ToyDetail = require('./components/toys/toy_detail');
const PokemonForm = require('./components/pokemons/pokemon_form.jsx');

// import { Router, Route, hashHistory } from 'react-router';
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;

const App = React.createClass({
  render() {
    return(
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonForm />
          <PokemonIndex/>
        </div>

        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={PokemonDetail}>
      <Route path="toys/:toyId" component={ToyDetail}></Route>
    </Route>
  </Route>
);

document.addEventListener( "DOMContentLoaded", () => {
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>,
    document.getElementById("root"));
});
