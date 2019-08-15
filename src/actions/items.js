export function pokemonsLoading(bool) {
  return {
    type: "POKEMONS_IS_LOADING",
    isLoading: bool
  };
}

export function pokemonsHasError(bool) {
  return {
    type: "POKEMONS_HAS_ERROR",
    hasError: bool
  };
}
export function pokemonsFetchDataSuccess(pokemons) {
  return {
    type: "POKEMONS_FETCH_DATA_SUCCESS",
    pokemons
  };
}

export function pokemonFetchData(url) {
  return dispatch => {
    dispatch(pokemonsLoading(true));
    const fetchPokemons = async myUrl => {
      try {
        const response = await fetch(myUrl);
        if (!response.ok) {
          throw Error("Error Fetching Pokemons");
        }
        dispatch(pokemonsLoading(false));
        const json = await response.json();
        dispatch(pokemonsFetchDataSuccess(json));
      } catch (error) {
        dispatch(pokemonsHasError(true));
      }
    };
    fetchPokemons(url);
  };
}
