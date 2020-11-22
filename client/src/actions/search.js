import axios from "axios";
import {
  LOADING_BATTLE_SEARCH,
  LOADING_SEARCHED_BATTLE,
  SHOW_SEARCH_LIST,
  SHOW_SEARCHED_BATTLE,
  RESET_SEARCHED_BATTLE,
  UPDATE_SEARCH_PARAMS,
  UPDATE_SEARCH_BATTLE_ID,
} from "actions/types";

// Search Battle
export const searchBattle = (searchParams) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    config.params = searchParams;
    dispatch(loadingOnSearch());
    const res = await axios.get(`/search`, config);
    
    dispatch({
      type: UPDATE_SEARCH_PARAMS,
      payload: searchParams,
    });

    dispatch({
      type: SHOW_SEARCH_LIST,
      payload: res.data.response,
    });
    return res;
    
  } catch (err) {
    console.log("search error", err);
  }
};

export const updateSearchedBattleID = (battle_id) => async dispatch => {
  if(battle_id) {
    dispatch({
      type: UPDATE_SEARCH_BATTLE_ID,
      payload: battle_id,
    });
  }
}

// Get the Details of Searched Battle
export const getSearchedBattle = (battle_id) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    dispatch(loadingOnSumbitSearch());
    const res = await axios.get(`/${battle_id}`, config);
    dispatch({
      type: SHOW_SEARCHED_BATTLE,
      payload: res.data.response
    });
  } catch (err) {
    console.log("search error", err);
  }
};


// Dispatch Loading
export const loadingOnSearch = () => async dispatch => {
  await dispatch({ type: LOADING_BATTLE_SEARCH });
};

// Dispatch Loading
export const loadingOnSumbitSearch = () => async dispatch => {
  await dispatch({ type: LOADING_SEARCHED_BATTLE });
};

// Dispatch Reset store
export const resetComponent = () => async dispatch => {
  await dispatch({ type: RESET_SEARCHED_BATTLE });
};
