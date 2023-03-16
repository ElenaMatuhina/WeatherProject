import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadingWeather = createAsyncThunk(
  '@@weather/load-weather',
  async (idTown, { extra: { client, api } }) => {
    return client.get(api.FIRST_PAGE_URL(idTown));
  }
);

const initialState = {
  status: 'idle',
  error: null,
  list: [],
};

const weatherSlice = createSlice({
  name: '@weather',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadingWeather.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadingWeather.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Cannot load data';
      })
      .addCase(loadingWeather.fulfilled, (state, action) => {
        state.status = 'recieved';
        state.list = action.payload.data.list;
      });
  },
});

export const setSearch = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
