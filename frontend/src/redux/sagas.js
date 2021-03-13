import { all } from "redux-saga/effects";
import unsplash from "./unsplash/saga";

function* rootSaga() {
  yield all([unsplash()]);
}

export default rootSaga;
