import React from 'react';

// Todo Presentational Component
export const TodoItem = ({ handleTodoClick, completed, text }) => {
  const todoStyle = {textDecoration: completed ? 'line-through' : 'none' }
  return (
    <li onClick={handleTodoClick} style={todoStyle} >
      {text}
    </li>
  );
};
