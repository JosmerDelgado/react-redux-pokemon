import { combineReducers } from "redux";
import { url, pokemonFilterName, pokemonTypeSelected } from "./items";

export default combineReducers({
  url,
  pokemonFilterName,
  pokemonTypeSelected
});
