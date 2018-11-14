import {
  CLIENTS_LOADING,
  CLIENTS_LOAD_SUCCEED,
  CLIENTS_LOAD_FAILED
} from "../actions/clients";

const initialState = {
  isLoading: false,
  loaded: false,
  error: null,
  items: []
};

export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLIENTS_LOADING:
      return { ...state, isLoading: true, loaded: false };
    case CLIENTS_LOAD_SUCCEED:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        error: null,
        items: action.payload.clients
      };
    case CLIENTS_LOAD_FAILED:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        error: action.payload.error
      };
    default:
      return state;
  }
};
