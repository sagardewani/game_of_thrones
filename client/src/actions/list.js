import axios from "axios";
import {
  LOADING_BATTLES_LIST,
  LOADING_BATTLES_COUNT,
  SHOW_BATTLE_LIST,
  SHOW_BATTLE_COUNT,
  RESET_BATTLE,
} from "actions/types";

// Get Battle List
export const getList = () => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    dispatch(loadingOnList());
    const res = await axios.get(`/list`, config);
    dispatch({
      type: SHOW_BATTLE_LIST,
      payload: res.data.response,
    });
  } catch (err) {
    console.log("list error", err);
  }
};

export const getCount = () => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    dispatch(loadingOnCount());
    const res = await axios.get(`/count`, config);
    dispatch({
      type: SHOW_BATTLE_COUNT,
      payload: res.data.response
    });
  } catch (err) {
    console.log("count error", err);
  }
};

// Dispatch Loading
export const loadingOnList = () => async dispatch => {
  await dispatch({ type: LOADING_BATTLES_LIST });
};

// Dispatch Loading
export const loadingOnCount = () => async dispatch => {
  await dispatch({ type: LOADING_BATTLES_COUNT });
};

// Dispatch Reset store
export const resetComponent = () => async dispatch => {
  await dispatch({ type: RESET_BATTLE });
};
