import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { TodoList } from './components';

/*****************************************************************************/
/*****************************************************************************/
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
}
/*****************************************************************************/
/*****************************************************************************/

// Generating VisibleTodoList container the easy way
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

// VisibleTodoList Container Component
export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
