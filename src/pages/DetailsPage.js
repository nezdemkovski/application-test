import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import { Row, Pager } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import {
  fetchDetailsFeed,
  addComment,
  removeComment
} from '../components/details/DetailsActions';
import Details from '../components/details/Details';

export class DetailsPage extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool.isRequired,
    details: PropTypes.object,
    comments: PropTypes.array,
    fetchDetailsFeed: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    removeComment: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._init = this._init.bind(this);
  }

  componentDidMount() {
    this._init();
  }

  static mapStateToProps(state) {
    return {
      isLoaded: state.getIn(['detailsReducer', 'isLoaded']),
      details: state.getIn(['detailsReducer', 'details']),
      comments: state.getIn(['detailsReducer', 'comments']),
    };
  }

  static mapDispatchToProps(dispatch) {
    return {
      fetchDetailsFeed: (id) => dispatch(fetchDetailsFeed(id)),
      addComment: (detailsId, commentBody) => dispatch(addComment(detailsId, commentBody)),
      removeComment: (detailsId, commentId) => dispatch(removeComment(detailsId, commentId)),
    };
  }

  _init() {
    const {
      id,
    } = this.props.match.params;

    this.props.fetchDetailsFeed(id);
  }

  render() {
    const {
      isLoaded,
      details,
      comments,
      addComment,
      removeComment,
    } = this.props;

    return (
      <div>
        <Row className='show-grig'>
          <Pager>
            <LinkContainer to='/'>
              <Pager.Item previous href="#">&larr; Back to Lists</Pager.Item>
            </LinkContainer>
          </Pager>
        </Row>

        <Loader loaded={isLoaded}>
          <Details
            details={details}
            comments={comments}
            addComment={addComment}
            removeComment={removeComment}
          />
        </Loader>
      </div>
    );
  }
}

export default connect(
  DetailsPage.mapStateToProps,
  DetailsPage.mapDispatchToProps,
)(DetailsPage);
