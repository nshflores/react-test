import * as actions from "../actions";

const initialState = {
  loading: false,
  droneId: null,
  latitude: null,
  longitude: null,
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

  const latitude = droneData[droneData.length - 1].latitude
  const longitude = droneData[droneData.length - 1].longitude

  const result = {
    ...state,
    loading: false,
    latitude,
    longitude,
    data: droneData
  };

  
  return result
};

const handlers = {
  [actions.DRONE_START_FETCH]: startLoading,
  [actions.DRONE_INFO]: droneDataRecevied,
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
