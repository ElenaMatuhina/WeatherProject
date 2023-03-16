import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './config';
import { weatherReducer } from './features/main/weather-slice';
import { searchReducer } from './features/search/search-slice';
import { forecastReducer } from './features/details/detail-slice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    search: searchReducer,
    forecast: forecastReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false, //проверка на сериализацию, возникала при работе с axios
    }),
});
