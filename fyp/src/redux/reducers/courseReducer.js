import { createSlice } from '@reduxjs/toolkit';

const initialState = { courses: [], lectures: [] };

const courseSlice = createSlice({
  name: 'Course',
  initialState,
  reducers: {
    allCoursesRequest: state => {
      state.loading = true;
    },
    allCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    allCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addToPlaylistRequest: state => {
      state.loading = true;
    },
    addToPlaylistSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addToPlaylistFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getCourseRequest: state => {
      state.loading = true;
    },
    getCourseSuccess: (state, action) => {
      state.loading = false;
      state.lectures = action.payload;
    },
    getCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearCourseError: state => {
      state.error = null;
    },
    clearCourseMessage: state => {
      state.message = null;
    },
  },
});

export const {
  allCoursesRequest,
  allCoursesSuccess,
  allCoursesFail,
  addToPlaylistRequest,
  addToPlaylistSuccess,
  addToPlaylistFail,
  clearCourseError,
  clearCourseMessage,
  getCourseRequest,
  getCourseSuccess,
  getCourseFail,
} = courseSlice.actions;

export default courseSlice.reducer;
