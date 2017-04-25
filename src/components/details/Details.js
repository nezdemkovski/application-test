import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';

import AddComment from './addComment/AddComment';
import CommentsBox from './commentsBox/CommentsBox';

export default class Details extends Component {
  static propTypes = {
    details: PropTypes.object,
    comments: PropTypes.array,
    addComment: PropTypes.func.isRequired,
    removeComment: PropTypes.func.isRequired,
  };

  render() {
    const {
      firstName,
      lastName,
      username,
      avatar,
    } = this.props.details.person;

    const {
      _id,
      text,
      likesCount,
      commentsCount,
    } = this.props.details;

    const {
      comments,
      addComment,
      removeComment,
    } = this.props;

    return (
      <div>
        <Row className='show-grid'>
          <Col xs={4} sm={2} xsOffset={4} smOffset={5}>
            <Image src={avatar} alt="Avatar" circle responsive/>
          </Col>
        </Row>

        <Row className='show-grid'>
          <Col xs={12}>
            <h3 className='text-center'>{firstName} {lastName}</h3>
            <p className='text-center text-gray'><strong>{username}</strong></p>
          </Col>
        </Row>

        <hr/>

        <Row className='show-grid'>
          <Col xs={12}>
            <p>{text}</p>
          </Col>
        </Row>

        <Row className='show-grid'>
          <Col xs={6} sm={2} smOffset={8}>
            <p className='text-right'>Likes: {likesCount}</p>
          </Col>
          <Col xs={6} sm={2}>
            <p className='text-right'>Comments: {commentsCount}</p>
          </Col>
        </Row>

        <AddComment
          detailsId={_id}
          addComment={addComment}
        />

        <CommentsBox
          comments={comments}
          detailsId={_id}
          removeComment={removeComment}
        />
      </div>
    );
  }
}
