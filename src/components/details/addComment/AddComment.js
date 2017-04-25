import React, { Component } from 'react';
import PropTypes from 'prop-types';

let firstName = null;
let lastName = null;
let commentText = null;

export default class AddComment extends Component {
  static propTypes = {
    detailsId: PropTypes.string,
    addComment: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._addComment = this._addComment.bind(this);
  }

  _addComment() {
    const {
      detailsId,
      addComment,
    } = this.props;

    addComment(
      detailsId,
      {
        firstName: firstName.value,
        lastName: lastName.value,
        commentText: commentText.value,
      });
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='First Name'
          ref={(input) => { firstName = input; }}
        />
        <input
          type='text'
          placeholder='Last Name'
          ref={(input) => { lastName = input; }}
        />
        <textarea
          placeholder="Comment"
          ref={(textarea) => { commentText = textarea; }}
        >
        </textarea>
        <button onClick={this._addComment}>Add comment</button>
      </div>
    );
  }
}
