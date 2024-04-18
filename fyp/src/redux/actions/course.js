import {
  allCoursesFail,
  allCoursesRequest,
  allCoursesSuccess,
  getCourseFail,
  getCourseRequest,
  getCourseSuccess,
} from '../reducers/courseReducer';
import { server } from '../store';
import axios from 'axios';

export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch(allCoursesRequest(category, keyword));

      const { data } = await axios.get(
        `${server}/courses?category=${category}&keyword=${keyword}`
      );

      dispatch(allCoursesSuccess(data.courses));
    } catch (error) {
      dispatch(allCoursesFail(error.response.data.message));
    }
  };

export const getCourseLectures = id => async dispatch => {
  try {
    dispatch(getCourseRequest(id));

    const { data } = await axios.get(`${server}/course/${id}`, {
      withCredentials: true,
    });

    dispatch(getCourseSuccess(data.lectures));
  } catch (error) {
    dispatch(getCourseFail(error.response.data.message));
  }
};
