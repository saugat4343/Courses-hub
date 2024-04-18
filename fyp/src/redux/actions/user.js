import {
  buySubscriptionFail,
  buySubscriptionRequest,
  buySubscriptionSuccess,
  cancelSubscriptionFail,
  cancelSubscriptionRequest,
  cancelSubscriptionSuccess,
} from '../reducers/subscriptionReducer';
import {
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutRequest,
  logoutSuccess,
  registerFail,
  registerRequest,
  registerSuccess,
} from '../reducers/userReducer';
import { server } from '../store';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  try {
    dispatch(loginRequest(email, password));

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          'Content-type': 'application/json',
        },
        withCredentials: true,
      }
    );

    console.log(data);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};

export const register = formdata => async dispatch => {
  try {
    dispatch(registerRequest(formdata));

    const { data } = await axios.post(`${server}/register`, formdata, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    console.log(data);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerFail(error.response.data.message));
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch(loadUserRequest());

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    console.log(data);
    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    dispatch(loadUserFail(error.response.data.message));
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch(logoutRequest());

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    console.log(data);
    dispatch(logoutSuccess(data.message));
  } catch (error) {
    dispatch(logoutFail(error.response.data.message));
  }
};

export const buySubscription = () => async dispatch => {
  try {
    dispatch(buySubscriptionRequest());

    const { data } = await axios.get(`${server}/subscribe`, {
      withCredentials: true,
    });

    dispatch(buySubscriptionSuccess(data.subscriptionId));
  } catch (error) {
    dispatch(buySubscriptionFail(error.response.data.message));
  }
};

export const cancelSubscription = () => async dispatch => {
  try {
    dispatch(cancelSubscriptionRequest());

    const { data } = await axios.delete(`${server}/subscribe/cancel`, {
      withCredentials: true,
    });

    dispatch(cancelSubscriptionSuccess(data.message));
  } catch (error) {
    dispatch(cancelSubscriptionFail(error.response.data.message));
  }
};
