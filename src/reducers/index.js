import { combineReducers } from 'redux';
import breakingBadReducer from './breakingBadReducer';

const rootReducer = combineReducers({
  breakingBadReducer,
});

export default rootReducer;
