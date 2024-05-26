import {combineReducers} from 'redux';
import emit from './emit.reducer';
import leader from './leader.reducer';
import setting from './setting.reducer';

export default combineReducers({
  emit,
  leader,
  setting,
});
