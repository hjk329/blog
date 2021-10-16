import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
  },
  reducers: {
    setState: (state, {payload}) => ({
      ...state,
      ...payload
    }),
  },
})

export const {setState} = appSlice.actions;

export default appSlice.reducer;
