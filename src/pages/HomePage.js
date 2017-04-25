import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import { fetchLists } from '../components/lists/ListsActions';
import Lists from '../components/lists/Lists';

import '../components/lists/common/styles/lists.css';

export class HomePage extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool.isRequired,
    lists: PropTypes.array,
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
      isLoaded: state.getIn(['listReducer', 'isLoaded']),
      lists: state.getIn(['listReducer', 'lists']),
    };
  }

  static mapDispatchToProps(dispatch) {
    return {
      fetchLists: () => dispatch(fetchLists()),
    };
  }

  _init() {
    this.props.fetchLists();
  }

  render() {
    const {
      isLoaded,
      lists,
    } = this.props;

    return (
      <Loader loaded={isLoaded}>
        <Lists lists={lists} />
      </Loader>
    );
  }
}

export default connect(
  HomePage.mapStateToProps,
  HomePage.mapDispatchToProps,
)(HomePage);
