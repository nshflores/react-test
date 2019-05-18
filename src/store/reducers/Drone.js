import * as actions from "../actions";

const initialState = {
  loading: false,
  data: [],
  zoom: 11,
};

const startLoading = (state, action) => {
  return { ...state, loading: true };
};

const droneDataRecevied = (state, action) => {
  const { 
    data: {
      data:droneData
    }
  } = action;

  const result = {
    ...state,
    loading: false,
    data: droneData
  };
  
  return result
};

const handlers = {
  [actions.DRONE_START_FETCH]: startLoading,
  [actions.DRONE_INFO]: droneDataRecevied
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
