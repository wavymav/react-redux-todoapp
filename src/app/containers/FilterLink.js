import React from 'react';
import { connect } from "react-redux";
import { setVisibiltyFilter } from '../actions';
import { Filter } from './components';

// Generating FilterLink container the easy way
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFliterClick: () => {
      dispatch(setVisibiltyFilter(ownProps.filter));
    }
  };
}
// FilterLink Container Component
export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
