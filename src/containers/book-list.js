import React, { Component } from 'react';
// Imports connect function from react-redux
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

// The below exports a container connected to Redux, instead of a basic component
export default connect(mapStateToProps)(BookList);