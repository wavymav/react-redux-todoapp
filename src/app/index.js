import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { AddTodo, Footer, VisibleTodoList } from "./containers";
import * as reducers from './reducers';


const reducer = combineReducers(reducers);

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  promise,
  logger
)(createStore);
const store = createStoreWithMiddleware(reducer);

// TodoApp COMPONENT
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
