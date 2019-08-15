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
