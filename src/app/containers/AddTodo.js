import React from 'react';
import { connect } from "react-redux";
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  const addTodoClick = () => {
    dispatch(addTodo(input.value));
    input.value = '';
  };

  const getInput = (value) => {
    input = value;
  };

  return (
    <div>
      <input ref={getInput} />
      <button onClick={addTodoClick}>
        Add Todo!
      </button>
    </div>
  );
};
// Generating an AddTodo Container Component
export default connect()(AddTodo);
