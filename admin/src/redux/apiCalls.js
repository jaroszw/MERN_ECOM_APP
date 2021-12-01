import { loginFailure, loginStart, loginSuccess } from './userRedux';
import {
  getProductStart,
  getProdyctSuccess,
  getProductFailure,
} from './productRedux';

import { publicRequest } from '../requestMethods';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getAllProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get('/products');
    dispatch(getProdyctSuccess(res.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};
