export const weatherTownSelector = (state) => state.weather.list;
export const weatherInfoSelector = (state) => ({
  status: state.weather.status,
  error: state.weather.error,
});
