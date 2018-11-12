export const CLIENTS_LOADING = "CLIENTS_LOADING";
export const CLIENTS_LOAD_SUCCEED = "CLIENTS_LOAD_SUCCEED";
export const CLIENTS_LOAD_FAILED = "CLIENTS_LOAD_FAILED";

export const clientsLoadStart = () => ({ type: CLIENTS_LOADING });

export const clientsLoadSucceed = clients => ({
  type: CLIENTS_LOAD_SUCCEED,
  payload: { clients }
});

export const clientsLoadFailed = error => ({
  type: CLIENTS_LOAD_FAILED,
  payload: { error }
});
