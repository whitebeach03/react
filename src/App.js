// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [todo, setTodo] = useState('');

  function SetTodo() {
    return (
      <button>確定</button>
    );
  }

  return (
    <div className="App">
      <h1>Hello World.</h1>
      <h2>My Name Is Takumi Shirahama.</h2>

      <input 
        type='text'  
        placeholder='ToDoの入力' 
      />

      <SetTodo />

      <p>入力されたToDo: {todo}</p>

    </div>
  );
}

export default App;
