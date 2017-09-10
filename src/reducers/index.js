import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses, authors, ajaxCallsInProgress
});

export default rootReducer;
