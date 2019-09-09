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
export function pokemonsLoading(state = false, action) {
  switch (action.type) {
    case "POKEMONS_IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
}

export function pokemonsHasError(state = false, action) {
  switch (action.type) {
    case "POKEMON_HAS_ERROR":
      return action.hasError;
    default:
      return state;
  }
}

export function pokemons(state = {}, action) {
  switch (action.type) {
    case "POKEMONS_FETCH_DATA_SUCCESS":
      return action.pokemons;
    default:
      return state;
  }
}
