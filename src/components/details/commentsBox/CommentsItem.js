import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Image } from 'react-bootstrap';

export default class CommentsItem extends Component {
  static propTypes = {
    comment: PropTypes.object,
    detailsId: PropTypes.string,
    removeComment: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._removeComment = this._removeComment.bind(this);
  }

  _removeComment() {
    const {
      _id
    } = this.props.comment;

    const {
      removeComment,
      detailsId,
    } = this.props;

    removeComment(detailsId, _id);
  }

  render() {
    const {
      avatar,
      firstName,
      lastName,
      date,
    } = this.props.comment.person;

    const {
      text,
    } = this.props.comment;

    return (
    <div className='comments'>
      <Row className='show-grid'>
        <Col xs={3} sm={2} md={1}>
          <Image src={avatar} alt="Avatar" circle responsive/>
        </Col>
        <Col xs={7} sm={8} md={9}>
          <h3>{firstName} {lastName}</h3>
          <time className='text-gray'><strong>{date}</strong></time>
        </Col>
        <Col xs={2} xsHidden>
          <Button onClick={this._removeComment} bsStyle='custom' block>Remove</Button>
        </Col>
      </Row>

      <Row className='show-grid'>
        <Col xs={9} sm={10} md={11} xsOffset={3} smOffset={2} mdOffset={1}>
          <p>{text}</p>
        </Col>
        <Col xs={12} smHidden mdHidden lgHidden>
          <Button onClick={this._removeComment} bsStyle='custom' block>Remove</Button>
        </Col>
      </Row>
    </div>
    );
  }
}
