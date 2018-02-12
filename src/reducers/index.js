import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// creates State: an object with the follow key/value pairs
const rootReducer = combineReducers({
  books: BooksReducer,
});

export default rootReducer;
