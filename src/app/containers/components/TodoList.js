import React from 'react';
import { TodoItem } from './TodoItem';

// TodoList Presentational Component
export const TodoList = ({ todos, onTodoClick }) => {
  const renderTodoList = (todo) => {
    return <TodoItem key={todo.id} {...todo} handleTodoClick={() => onTodoClick(todo.id)} />
  }
  return (
    <ul>{todos.map(renderTodoList)}</ul>
  );
}
