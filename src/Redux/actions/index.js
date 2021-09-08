import { actionTypes } from "./actionTypes";

const defaultAction = (type, payload) => ({ type, payload });

export const addCart = (payload) => {
  return (dispatch) =>
    dispatch(defaultAction(actionTypes.ADD_CART, payload));
};

export const updateCount = (payload) => {
  return (dispatch) =>
    dispatch(defaultAction(actionTypes.UPDATE_COUNT, payload));
};
