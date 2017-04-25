import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class ListItem extends Component {
  static propTypes = {
    list: PropTypes.shape({
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      person: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }),
    }),
  };

  render() {
    const {
      firstName,
      lastName,
      avatar,
    } = this.props.list.person;

    const {
      text,
      date,
    } = this.props.list;

    return (
      <div className='list'>
        <Row className='show-grid'>
          <Col xs={4} sm={2} md={1} xsOffset={4} smOffset={0}>
            <Image src={avatar} alt="Avatar" circle responsive/>
          </Col>
          <Col xs={12} sm={8} md={9}>
            <h3>{firstName} {lastName}</h3>
            <time className='text-gray'><strong>{date}</strong></time>
          </Col>
          <Col xs={12} sm={2} xsHidden>
            <LinkContainer to={`/details/${this.props.list._id}`}>
              <Button bsStyle='custom' block>Details</Button>
            </LinkContainer>
          </Col>
        </Row>

        <Row className='show-grid'>
          <Col xs={12} sm={10} smOffset={2} mdOffset={1}>
            <p>{text}</p>
          </Col>
          <Col xs={12} smHidden mdHidden lgHidden>
            <LinkContainer to={`/details/${this.props.list._id}`}>
              <Button bsStyle='custom' block>Details</Button>
            </LinkContainer>
          </Col>
        </Row>
      </div>
    );
  }
}
