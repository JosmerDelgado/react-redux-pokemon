import { combineReducers } from "redux";
import { pokemonsLoading, pokemonsHasError, pokemons } from "./items";

export default combineReducers({
  pokemonsLoading,
  pokemonsHasError,
  pokemons
});
