import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel } from 'react-bootstrap';

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

  _addComment(e) {
    e.preventDefault();

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
      <form className='form-horizontal' onSubmit={this._addComment}>
        <fieldset>
          <legend>Write your thoughts about this feed</legend>

          <FormGroup controlId='inputFirstName'>
            <ControlLabel className='col-lg-2'>First Name</ControlLabel>
            <div className='col-lg-10'>
              <input
                type='text'
                className='form-control'
                id='inputFirstName'
                placeholder='First Name'
                ref={(input) => { firstName = input; }}
              />
            </div>
          </FormGroup>

          <FormGroup controlId='inputLastName'>
            <ControlLabel className='col-lg-2'>Last Name</ControlLabel>
            <div className='col-lg-10'>
              <input
                type='text'
                className='form-control'
                id='inputLastName'
                placeholder='Last Name'
                ref={(input) => { lastName = input; }}
              />
            </div>
          </FormGroup>

          <FormGroup controlId='textArea'>
            <ControlLabel className='col-lg-2'>Your Comment</ControlLabel>
            <div className='col-lg-10'>
              <textarea
                className='form-control'
                rows='3'
                id='textArea'
                ref={(textarea) => { commentText = textarea; }}
              />
              <span className='help-block'>Don't use swear words here please. Or use. It's up to you :)</span>
            </div>
          </FormGroup>

          <FormGroup>
            <div className='col-lg-10 col-lg-offset-2'>
              <button type='submit' className='btn btn-custom blue'>Add comment</button>
            </div>
          </FormGroup>
        </fieldset>
      </form>
    );
  }
}
