import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import profileReducer from './reducers/profileReducer';
import courseReducer from './reducers/courseReducer';
import subscriptionReducer from './reducers/subscriptionReducer';
import adminReducer from './reducers/adminReducer';
// import reducer from './reducers/combineReducers';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    courses: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
  },
});

export default store;

export const server = 'https://courses-hub-4.onrender.com/api/v1';
