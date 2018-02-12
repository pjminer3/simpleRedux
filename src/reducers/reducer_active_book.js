// State argument is not entire application state, only the part of the state this reducer is responsible for
// Remember: this reducer (and all reducers) will automatically be called by ALL ACTIONS
export default function(state = null, action) {
  switch (action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state
}