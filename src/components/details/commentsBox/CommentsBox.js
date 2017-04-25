import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentsItem from './CommentsItem';

export default class CommentsBox extends Component {
  static propTypes = {
    comments: PropTypes.array,
    detailsId: PropTypes.string,
    removeComment: PropTypes.func.isRequired,
  };

  render() {
    const {
      comments,
      detailsId,
      removeComment,
    } = this.props;

    return (
      <div>
        {
          comments.map((comment, id) => {
            return (
              <CommentsItem
                comment={comment}
                detailsId={detailsId}
                removeComment={removeComment}
                key={id}
              />
            )
          })
        }
      </div>
    );
  }
}
