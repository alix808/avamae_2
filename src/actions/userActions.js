import axios from 'axios';
import { SET_LOADING, GET_BANNER, ERROR, UPDATE_IMAGE } from './types';

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// Get image urls from the server
export const getBanner = () => async dispatch => {
  try {
    const res = await axios.get(
      'https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details'
    );

    dispatch({
      type: GET_BANNER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: 'error'
    });
  }
};

// Update image
export const updateImage = number => {
  return {
    type: UPDATE_IMAGE,
    payload: number
  };
};
