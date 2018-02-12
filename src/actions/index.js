// the action creator for selecting a book from the list
export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action, and object (always) with a 'type' property and (sometimes) a payload property
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  }
}