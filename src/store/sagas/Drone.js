import { takeEvery, call, fork, put, cancel, all } from "redux-saga/effects";
import { delay } from 'redux-saga';
import API from "../api";
import * as actions from "../actions";

/*
  1. The weather service requires us to make a search by lat/lng to find its
  weather ID.
  2. We then use that weather ID to get the weather.

  This process is pretty well defined here with a saga.

  call invokes a method
  put dispatches an action
  takeEvery watches actions and executes a function

  Also -- the `*` in function is important; turns it into a "generator"

*/

function* droneFetchData() {
  try {
    while(true) {
      const { data } = yield call(API.droneData);
      yield put({ type: actions.DRONE_INFO, data });
      yield delay(4000);
    }
  } catch (err) {
    yield put({ type: actions.API_ERROR, code: err.code });
    yield cancel();
    return;
  }
}

function* droneCancelFetch () {
  console.log(`Calling droneCancelFetch`);
  const bgDroneFetchData = yield fork(droneFetchData)
  yield cancel(bgDroneFetchData)
}



function* watchDroneFetch() {
  yield all([
    takeEvery(actions.DRONE_START_FETCH, droneFetchData),
    takeEvery(actions.DRONE_CANCEL_FETCH, droneCancelFetch)
  ]);
}

export default [watchDroneFetch];
