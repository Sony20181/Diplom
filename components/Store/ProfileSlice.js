import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    firstName: '',
    lastName: '',
    birthDate: "",
    club: "",
    license: '',
    photo: '',
    imageLoaded:"false",
  },
  reducers: {
    updateFirstName: (state, action) => {
        state.firstName = action.payload;
    },
    updateLastName: (state, action) => {
        state.lastName = action.payload;
    },
    updateBirthDate: (state, action) => {
        state.birthDate = action.payload;
    },
    updateClub: (state, action) => {
        state.club = action.payload;
    },
    updateLicense: (state, action) => {
        state.license = action.payload;
    },
    updatePhoto: (state, action) => {
        state.photo = action.payload;
    },
    updateImageLoaded: (state, action) => {
      state.imageLoaded = action.payload;
    },
    
  },
});

export const { updateFirstName, updateLastName, updateLicense, updatePhoto, updateBirthDate,updateClub,updateImageLoaded } = profileSlice.actions;

export default profileSlice.reducer;