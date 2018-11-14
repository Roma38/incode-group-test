import { combineReducers } from "redux";
import { clientsReducer } from "./clients";
import { selectedClientReducer } from "./selectedClient";

const rootReducer = combineReducers({
  clients: clientsReducer,
  selectedClient: selectedClientReducer,
});

export default rootReducer;