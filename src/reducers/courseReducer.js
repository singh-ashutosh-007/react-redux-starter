export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      // state.push(action.course); //States are immutable
      // return state;

      return [...state, Object.assign({}, action.course)]; // ... return new instance
    default:
      return state;

  }
}
