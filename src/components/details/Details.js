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
      <div >


        <Row className='show-grid'>
          <Row className='show-grid'>
            <Col xs={4} xsOffset={4}>
              <Image src={avatar} alt="Avatar" circle responsive />
            </Col>
          </Row>

          <Row className='show-grid'>
            <Col xs={6} sm={8}>
              <h3>{firstName} {lastName}</h3>
              <strong><time>{username}</time></strong>
            </Col>
            <Col xs={6} sm={2}>

            </Col>
          </Row>

          <Row className='show-grid'>
            <Col xs={12}>
              <p>{text}</p>
            </Col>
          </Row>

          <Row className='show-grid'>
            <Col xs={3} xsOffset={6}>
              <p>Likes: {likesCount}</p>
            </Col>
            <Col xs={3}>
              <p>Comments: {commentsCount}</p>
            </Col>
          </Row>
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
