import { SELECT_CLIENT } from "../actions/selectedClient";

export const selectedClientReducer = (client = null, action) => {
  switch (action.type) {
    case SELECT_CLIENT:
      return action.payload;
    default:
      return client;
  }
};
