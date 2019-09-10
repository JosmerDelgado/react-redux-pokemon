export function setUrl(val) {
  return {
    type: "URL",
    url: val
  };
}
export function pokemonFilterName(name) {
  return {
    type: "POKEMON_FILTER_NAME",
    filterName: name
  };
}
export function pokemonTypeSelected(type) {
  return {
    type: "POKEMON_TYPE_SELECTED",
    typeSelected: type
  };
}
