import { combineReducers } from 'redux';

import appReducer from '../redux/app/slice';
import authReducer from '../redux/auth/slice';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
})

export default rootReducer;
