import { TOGGLE_TODO, ADD_TODO, SET_VISIBILITY_FILTER } from '../constants';

// Action Creators
let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export const setVisibiltyFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};
