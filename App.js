
import React from 'react';
// import { Provider } from 'react-redux';
// import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => (
  
    <div>
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>

);

export default App;