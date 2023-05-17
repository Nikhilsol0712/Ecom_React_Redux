import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/Auth.constants";

export const userRegisterRequest = (userInfo) => {
  return {
    type: USER_REGISTER_REQUEST,
    payload: userInfo,
  };
};

export const userRegisterSuccess = (message) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: message,
  };
};

export const userRegisterFail = (error) => {
  return {
    type: USER_REGISTER_FAIL,
    payload: error,
  };
};

export const userLoginRequest = (userInfo) => {
  return {
    type: USER_LOGIN_REQUEST,
    payload: userInfo,
  };
};

export const userLoginSuccess = (message) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: message,
  };
};

export const userLoginFail = (error) => {
  return {
    type: USER_LOGIN_FAIL,
    payload: error,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
