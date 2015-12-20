import { TOGGLE_TODO, ADD_TODO } from '../constants';

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        todo(undefined, action),
        ...state
      ];
    case TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};
