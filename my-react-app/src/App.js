
import './App.css';

// App.js
import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React To-Do App</h1>
        <TaskInput />
        <TaskList />
        
      </div>
    </Provider>
  );
}

export default App;

