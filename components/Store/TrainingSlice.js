
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    trainings: [],
};

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    addTraining: (state, action) => {
      state.trainings.push({ id: new Date().toISOString(), ...action.payload });
    },
    updateTraining: (state, action) => {
      const index = state.trainings.findIndex((elem) => elem.id === action.payload.id);
      if (index !== -1) {
        state.trainings[index] = action.payload;
      }
    },
    removeTrainig(state, action){
        state.trainings = state.trainings.filter(elem => elem.id !== action.payload)
        
    },
   
    
  },
});

export const { addTraining, updateTraining,removeTrainig } = trainingSlice.actions;
export const selectArrowById = (state, id) => state.trainings.trainings.find((elem) => elem.id === id);


export default trainingSlice.reducer;
