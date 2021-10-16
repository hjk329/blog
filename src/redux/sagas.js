import { fork, all } from 'redux-saga/effects';

import appSaga from '../redux/app/saga';
import authSaga from '../redux/auth/saga';

function* sagas() {
  yield all([
    fork(appSaga),
    fork(authSaga),
  ])
}
export default sagas;
