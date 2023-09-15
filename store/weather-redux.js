import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: null,
};

const weatherSlice = createSlice({
  name: "weatherRedux",
  initialState,
  reducers: {
    selectCity(state, action) {
      state.city = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { weatherReducer: weatherSlice.reducer },
});

export const weatherActions = weatherSlice.actions;

export default store;
