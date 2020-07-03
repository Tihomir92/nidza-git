import { all } from "redux-saga/effects";
import taskSagas from '../tasks/saga'

export default function* rootSaga() {
  yield all([
     taskSagas(),

  ]);  
}