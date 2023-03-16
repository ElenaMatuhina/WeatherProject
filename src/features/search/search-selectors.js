export const searchTownSelector = (state) => state.search.search;
export const weatherDetailSelector = (state) => state.search.weather;
export const searchInfoSelector = (state) => ({
  status: state.search.status,
  error: state.search.error,
});
