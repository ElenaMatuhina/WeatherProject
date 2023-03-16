import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const searchWeather = createAsyncThunk(
  '@@weather/search-weather',
  async (nameTown, { extra: { client, api } }) => {
    return client.get(api.SEARCH_URL(nameTown));
  }
);

const initialState = {
  status: 'idle',
  error: null,
  weather: {},
  search: '',
};

const searchSlice = createSlice({
  name: '@search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    clearSearch: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchWeather.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(searchWeather.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Cannot load data';
      })
      .addCase(searchWeather.fulfilled, (state, action) => {
        state.status = 'recieved';
        state.weather = action.payload.data; //data
        // state.town = action.payload.data.name;
      });
  },
});

export const { setSearch, clearSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
