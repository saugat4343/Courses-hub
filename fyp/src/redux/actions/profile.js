import {
  addToPlaylistFail,
  addToPlaylistRequest,
  addToPlaylistSuccess,
} from '../reducers/courseReducer';
import {
  changePasswordFail,
  changePasswordRequest,
  changePasswordSuccess,
  forgotPasswordFail,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  removeFromPlaylistFail,
  removeFromPlaylistRequest,
  removeFromPlaylistSuccess,
  resetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  updateProfileFail,
  updateProfilePictureFail,
  updateProfilePictureRequest,
  updateProfilePictureSuccess,
  updateProfileRequest,
  updateProfileSuccess,
} from '../reducers/profileReducer';
import { server } from '../store';
import axios from 'axios';

export const updateProfile = (name, email) => async dispatch => {
  try {
    dispatch(updateProfileRequest(name, email));

    const { data } = await axios.put(
      `${server}/updateprofile`,
      {
        name,
        email,
      },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(updateProfileSuccess(data.message));
  } catch (error) {
    dispatch(updateProfileFail(error.response.data.message));
  }
};

export const updateProfilePicture = formdata => async dispatch => {
  try {
    dispatch(updateProfilePictureRequest(formdata));

    const { data } = await axios.put(
      `${server}/updateprofilepicture`,
      formdata,
      {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    dispatch(updateProfilePictureSuccess(data.message));
  } catch (error) {
    dispatch(updateProfilePictureFail(error.response.data.message));
  }
};

export const changePassword = (oldPassword, newPassword) => async dispatch => {
  try {
    dispatch(changePasswordRequest(oldPassword, newPassword));

    const { data } = await axios.put(
      `${server}/changepassword`,
      { oldPassword, newPassword },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch(changePasswordSuccess(data.message));
  } catch (error) {
    dispatch(changePasswordFail(error.response.data.message));
  }
};

export const forgotPassword = email => async dispatch => {
  try {
    dispatch(forgotPasswordRequest(email));

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/forgetpassword`,
      { email },
      config
    );

    dispatch(forgotPasswordSuccess(data.message));
  } catch (error) {
    dispatch(forgotPasswordFail(error.response.data.message));
  }
};

export const resetPassword = (token, password) => async dispatch => {
  try {
    dispatch(resetPasswordRequest(password));

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/resetpassword/${token}`,
      { password },
      config
    );

    dispatch(resetPasswordSuccess(data.message));
  } catch (error) {
    dispatch(resetPasswordFail(error.response.data.message));
  }
};

export const addToPlaylist = id => async dispatch => {
  try {
    dispatch(addToPlaylistRequest(id));

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/addtoplaylist`,
      { id },
      config
    );

    dispatch(addToPlaylistSuccess(data.message));
  } catch (error) {
    dispatch(addToPlaylistFail(error.response.data.message));
  }
};

export const removeFromPlaylist = id => async dispatch => {
  try {
    dispatch(removeFromPlaylistRequest(id));

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `${server}/removefromplaylist?id=${id}`,
      config
    );

    dispatch(removeFromPlaylistSuccess(data.message));
  } catch (error) {
    dispatch(removeFromPlaylistFail(error.response.data.message));
  }
};
