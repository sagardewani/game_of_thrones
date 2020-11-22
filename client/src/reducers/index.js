import battles from "./list";
import { combineReducers } from "redux";
import search from "./search";

export default combineReducers({
  battles,
  search,
});