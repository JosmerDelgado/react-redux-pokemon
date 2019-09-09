export const getOffset = url =>
  url.match(/offset=(\d+)/) ? url.match(/offset=(\d+)/)[1] : 0;
