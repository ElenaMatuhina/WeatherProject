import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadingForecast = createAsyncThunk(
  '@@weather/load-forecast',
  async (nameTown, { extra: { client, api } }) => {
    return client.get(api.FORECAST(nameTown));
  }
);

const initialState = {
  status: 'idle',
  error: null,
  list: [],
  isHidden: false,
};

const forecastSlice = createSlice({
  name: '@weather-forcast',
  initialState,
  reducers: {
    setIsHidden: (state) => {
      state.isHidden = !state.isHidden;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadingForecast.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadingForecast.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Cannot load data';
      })
      .addCase(loadingForecast.fulfilled, (state, action) => {
        state.status = 'recieved';
        state.list = action.payload.data.list;
      });
  },
});

export const {setIsHidden} = forecastSlice.actions;
export const forecastReducer = forecastSlice.reducer;
