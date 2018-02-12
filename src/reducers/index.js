import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// creates State: an object with the follow key/value pairs
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
});

export default rootReducer;
