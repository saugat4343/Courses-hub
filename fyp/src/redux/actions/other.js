import {
  contactFail,
  contactRequest,
  contactSuccess,
  courseRequestFail,
  courseRequestRequest,
  courseRequestSuccess,
  teachRequestFail,
  teachRequestRequest,
  teachRequestSuccess,
} from '../reducers/otherReducer';
import { server } from '../store';
import axios from 'axios';

export const contactUs = (name, email, message) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
      withCredentials: true,
    };

    dispatch(contactRequest());

    const { data } = await axios.post(
      `${server}/contact`,
      { name, email, message },
      config
    );

    dispatch(contactSuccess(data.message));
  } catch (error) {
    dispatch(contactFail(error.response.data.message));
  }
};

export const courseRequest = (name, email, course) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
      withCredentials: true,
    };

    dispatch(courseRequestRequest());

    const { data } = await axios.post(
      `${server}/courserequest`,
      { name, email, course },
      config
    );

    dispatch(courseRequestSuccess(data.message));
  } catch (error) {
    dispatch(courseRequestFail(error.response.data.message));
  }
};

export const teachRequest =
  (name, email, occupation, about) => async dispatch => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      };

      dispatch(teachRequestRequest());

      const { data } = await axios.post(
        `${server}/teach`,
        { name, email, occupation, about },
        config
      );

      dispatch(teachRequestSuccess(data.message));
    } catch (error) {
      dispatch(teachRequestFail(error.response.data.message));
    }
  };
