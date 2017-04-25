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
      <Row className='show-grid list'>
        <Row className='show-grid'>
          <Col xs={6} sm={2} xsOffset={3} smOffset={0}>
            <Image src={avatar} alt="Avatar" circle responsive />
          </Col>
          <Col xs={6} sm={8}>
            <h3>{firstName} {lastName}</h3>
            <strong><time>{date}</time></strong>
          </Col>
          <Col xs={6} sm={2}>
            <Button onClick={this._removeComment} bsStyle='custom' block>Remove</Button>
          </Col>
        </Row>
        <Row className='show-grid'>
          <Col xs={12} sm={10} smOffset={2}>
            <p>{text}</p>
          </Col>
        </Row>
      </Row>
    );
  }
}
