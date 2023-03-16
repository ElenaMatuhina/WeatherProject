export const weatherForecastSelector = (state) => state.forecast.list;
export const forecastInfoSelector = (state) => ({
  status: state.forecast.status,
  error: state.forecast.error,
});

export const isHiddenSelector = (state) => state.forecast.isHidden;
