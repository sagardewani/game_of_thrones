import {
  LOADING_BATTLES_LIST,
  LOADING_BATTLES_COUNT,
  SHOW_BATTLE_LIST,
  SHOW_BATTLE_COUNT,
  RESET_BATTLE,
} from "actions/types";

const initialState = {
  list: [],
  count: 0,
  loadingList: true,
  loadingCount: true,
  // error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RESET_BATTLE:
      return {
        ...initialState,
        loadingList: state.loadingList,
        loadingCount: state.loadingCount,
      };
    case SHOW_BATTLE_LIST:
      return {
        ...state,
        list: payload.filter(d => !!d),
        loadingList: false,
      };
    case SHOW_BATTLE_COUNT:
      return {
        ...state,
        count: payload,
        loadingCount: false,
      };
    case LOADING_BATTLES_COUNT:
      return {
        ...state,
        loadingCount: true,
      }
    case LOADING_BATTLES_LIST: 
      return {
        ...state,
        loadingList: true
      };
    default:
      return state;
  }
}
