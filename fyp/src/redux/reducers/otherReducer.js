import { createSlice } from '@reduxjs/toolkit';

const otherSlice = createSlice({
  name: 'Others',
  initialState: {},
  reducers: {
    contactRequest: state => {
      state.loading = true;
    },
    contactSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    contactFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    courseRequestRequest: state => {
      state.loading = true;
    },
    courseRequestSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    courseRequestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    teachRequestRequest: state => {
      state.loading = true;
    },
    teachRequestSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    teachRequestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearOtherError: state => {
      state.error = null;
    },
    clearOtherMessage: state => {
      state.message = null;
    },
  },
});

export const {
  courseRequestRequest,
  courseRequestSuccess,
  courseRequestFail,
  contactRequest,
  contactSuccess,
  contactFail,
  clearOtherError,
  clearOtherMessage,
  teachRequestRequest,
  teachRequestSuccess,
  teachRequestFail,
} = otherSlice.actions;

export default otherSlice.reducer;
