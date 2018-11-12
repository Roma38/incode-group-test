import { combineReducers } from "redux";
import { clientsReducer as clients } from "./clients";

const rootReducer = combineReducers({
  clients
});

export default rootReducer;

