import pokemonTypes from "../constants/pokemonTypes";

export function url(state = "", action) {
  switch (action.type) {
    case "URL":
      return action.url;
    default:
      return state;
  }
}

export function pokemonFilterName(state = "", action) {
  switch (action.type) {
    case "POKEMON_FILTER_NAME":
      return action.filterName;
    default:
      return state;
  }
}
export function pokemonTypeSelected(state = pokemonTypes[0], action) {
  switch (action.type) {
    case "POKEMON_TYPE_SELECTED":
      return action.typeSelected;
    default:
      return state;
  }
}
