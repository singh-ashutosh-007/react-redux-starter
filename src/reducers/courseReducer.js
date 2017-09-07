import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      // state.push(action.course); //States are immutable
      // return state;

      return [...state, Object.assign({}, action.course)]; // ... return new instance
    default:
      return state;

  }
}
