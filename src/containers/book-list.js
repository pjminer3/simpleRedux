import React, { Component } from 'react';
// Imports connect function from react-redux
import { connect } from 'react-redux';
// the function that makes sure actions flow through all reducers in our application
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className={"list-group-item"}
        >{book.title}</li>
      );
    });
  };
  
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// mapStatToProps automatically takes the entire application state as the argument
function mapStateToProps(state) {
  // Whatever is returned from here will show up as props for BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to dispatch which funnels it to all reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// The below exports a container connected to Redux, instead of a basic component
// mapStateToProps maps the Redux state to the props of the component (making it a container)
// mapDispatchToProps maps our action creator return values to props
// Promote BookList from a component to container -- it needs to know about this new dispatch method, selectBook. Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);