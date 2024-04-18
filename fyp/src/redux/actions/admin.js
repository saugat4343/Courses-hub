import {
  addLectureFail,
  addLectureRequest,
  addLectureSuccess,
  createCourseFail,
  createCourseRequest,
  createCourseSuccess,
  deleteCourseFail,
  deleteCourseRequest,
  deleteCourseSuccess,
  deleteLectureFail,
  deleteLectureRequest,
  deleteLectureSuccess,
  deleteUserFail,
  deleteUserRequest,
  deleteUserSuccess,
  getAdminStatsFail,
  getAdminStatsRequest,
  getAdminStatsSuccess,
  getAllUsersFail,
  getAllUsersRequest,
  getAllUsersSuccess,
  updateUserRoleFail,
  updateUserRoleRequest,
  updateUserRoleSuccess,
} from '../reducers/adminReducer';
import { server } from '../store';
import axios from 'axios';

export const createCourse = formdata => async dispatch => {
  try {
    dispatch(createCourseRequest(formdata));

    const config = {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/createcourse`,
      formdata,
      config
    );

    dispatch(createCourseSuccess(data.message));
  } catch (error) {
    dispatch(createCourseFail(error.response.data.message));
  }
};

export const deleteCourse = id => async dispatch => {
  try {
    dispatch(deleteCourseRequest(id));

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.delete(`${server}/course/${id}`, config);

    dispatch(deleteCourseSuccess(data.message));
  } catch (error) {
    dispatch(deleteCourseFail(error.response.data.message));
  }
};

export const addLecture = (id, formdata) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    };

    dispatch(addLectureRequest(id, formdata));

    const { data } = await axios.post(
      `${server}/course/${id}`,
      formdata,
      config
    );

    dispatch(addLectureSuccess(data.message));
  } catch (error) {
    dispatch(addLectureFail(error.response.data.message));
  }
};

export const deleteLecture = (courseId, lectureId) => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };

    dispatch(deleteLectureRequest(courseId, lectureId));

    const { data } = await axios.delete(
      `${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,
      config
    );

    dispatch(deleteLectureSuccess(data.message));
  } catch (error) {
    dispatch(deleteLectureFail(error.response.data.message));
  }
};

export const getAllUsers = () => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };

    dispatch(getAllUsersRequest());

    const { data } = await axios.get(`${server}/admin/users`, config);

    dispatch(getAllUsersSuccess(data.users));
  } catch (error) {
    dispatch(getAllUsersFail(error.response.data.message));
  }
};

export const updateUserRole = id => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };

    dispatch(updateUserRoleRequest());

    const { data } = await axios.put(`${server}/admin/user/${id}`, {}, config);

    dispatch(updateUserRoleSuccess(data.message));
  } catch (error) {
    dispatch(updateUserRoleFail(error.response.data.message));
  }
};

export const deleteUser = id => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };

    dispatch(deleteUserRequest());

    const { data } = await axios.delete(`${server}/admin/user/${id}`, config);

    dispatch(deleteUserSuccess(data.message));
  } catch (error) {
    dispatch(deleteUserFail(error.response.data.message));
  }
};

export const getDashboardStats = () => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };

    dispatch(getAdminStatsRequest());

    const { data } = await axios.get(`${server}/admin/stats`, config);

    dispatch(getAdminStatsSuccess(data));
  } catch (error) {
    dispatch(getAdminStatsFail(error.response.data.message));
  }
};
