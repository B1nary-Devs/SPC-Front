import { combineReducers } from 'redux';
import userReducer from './user/userSlice';
import termReducer from './termo/termoSlice'
import duplicatasreducer from './duplicatas/duplicatasSlice';

export default combineReducers({
  user: userReducer,
  term: termReducer,
  duplicatas: duplicatasreducer,
});
