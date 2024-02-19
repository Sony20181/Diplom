import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bows: [],
};

const bowSlice = createSlice({
  name: 'bows',
  initialState,
  reducers: {
    addBow: (state, action) => {
      state.bows.push({ id: new Date().toISOString(), ...action.payload });
    },
    updateBow: (state, action) => {
      const index = state.bows.findIndex((bow) => bow.id === action.payload.id);
      if (index !== -1) {
        state.bows[index] = action.payload;
      }
    },
    removeBow(state, action){
        state.bows = state.bows.filter(elem => elem.id !== action.payload)
        
    },
  },
});

export const { addBow, updateBow,removeBow } = bowSlice.actions;
export const selectBowById = (state, id) => state.bows.bows.find((bow) => bow.id === id);

export default bowSlice.reducer;