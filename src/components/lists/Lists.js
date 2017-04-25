import React, { Component }from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

export default class Lists extends Component {
  static propTypes = {
    lists: PropTypes.array,
  };

  render() {
    const {
      lists,
    } = this.props;

    return (
      <div>
        {
          lists.map((list, id) => {
            return (
              <ListItem
                list={list}
                key={id}
              />
            )
          })
        }
      </div>
    );
  }
}
