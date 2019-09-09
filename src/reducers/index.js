import { combineReducers } from "redux";
import {
  url,
  pokemonFilterName,
  pokemonTypeSelected,
  pokemonsLoading,
  pokemonsHasError,
  pokemons
} from "./items";

export default combineReducers({
  url,
  pokemonFilterName,
  pokemonTypeSelected,
  pokemonsLoading,
  pokemonsHasError,
  pokemons
});
