import {
  LOADING_BATTLE_SEARCH,
  LOADING_SEARCHED_BATTLE,
  SHOW_SEARCH_LIST,
  SHOW_SEARCHED_BATTLE,
  RESET_SEARCHED_BATTLE,
  UPDATE_SEARCH_PARAMS,
  UPDATE_SEARCH_BATTLE_ID,
} from "actions/types";

const initialState = {
  list: [],
  battle_id: null,
  selectedBattle: null,
  loadingBattle: true,
  loadingList: true,
  // error: {},
  sortingParams: {
    limit: 20,
    page: 1,
    king: "",
    location: "",
    type: "",
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RESET_SEARCHED_BATTLE:
      return {
        ...initialState,
        loadingList: state.loadingList,
        loadingBattle: state.loadingBattle,
      };
    case UPDATE_SEARCH_PARAMS:
      return  {
        ...state,
        sortingParams: { ...payload }
      };
    case UPDATE_SEARCH_BATTLE_ID:
      return {
        ...state,
        battle_id: payload,
      };
    case SHOW_SEARCH_LIST:
      return {
        ...state,
        list: payload,
        loadingList: false,
      };
    case SHOW_SEARCHED_BATTLE:
      return {
        ...state,
        selectedBattle: payload,
        loadingBattle: false,
      };
    case LOADING_BATTLE_SEARCH: 
      return {
        ...state,
        loadingList: true
      };
    case LOADING_SEARCHED_BATTLE: 
      return {
        ...state,
        loadingBattle: true
      };
    default:
      return state;
  }
}
