
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    arrow: [],
};

const arrowSlice = createSlice({
  name: 'arrow',
  initialState,
  reducers: {
    addArrow: (state, action) => {
      state.arrow.push({ id: new Date().toISOString(), ...action.payload });
    },
    updateArrow: (state, action) => {
      const index = state.arrow.findIndex((elem) => elem.id === action.payload.id);
      if (index !== -1) {
        state.arrow[index] = action.payload;
      }
    },
    removeArrow(state, action){
        state.arrow = state.arrow.filter(elem => elem.id !== action.payload)
        
    },
  },
});

export const { addArrow, updateArrow,removeArrow } = arrowSlice.actions;
export const selectArrowById = (state, id) => state.arrow.arrow.find((elem) => elem.id === id);

export default arrowSlice.reducer;